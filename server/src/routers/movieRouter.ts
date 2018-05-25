import Express, { Request, Response, NextFunction } from 'express';
import Logger from '../Logger';
import { getMovieByTitle } from '../apiHandler';
import { addMovie, getAllMovies } from '../databaseHandler';
import { makeKeysLowerCased } from '../utils';

const movieRouter = Express.Router();

const validateBody = (body: any): boolean => typeof body.title === 'string';

movieRouter.post('/movies', async (req: Request, res: Response) => {
  if (!validateBody(req.body)) {
    return res.sendStatus(400);
  }

  try {
    const response = await getMovieByTitle(req.body.title);
    const movie = makeKeysLowerCased(response.data);
    await addMovie(movie);
    res.send(movie);

  } catch (e) {
    res.sendStatus(404);
  }
});

movieRouter.get('/movies', async (req: Request, res: Response) => {
  try {
    const movies = await getAllMovies();
    res.send(movies);

  } catch (e) {
    res.sendStatus(500);
  }
});

export default movieRouter;
