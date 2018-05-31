import Express, { Request, Response, NextFunction } from 'express';
import { getMovieByTitle } from '../apiHandler';
import { addMovie, getAllMovies, getMovieById } from '../database/movieHandler';
import { makeKeysLowerCased } from '../utils';
import MovieNotFoundError from '../errors/MovieNotFoundError';

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
    if (e instanceof MovieNotFoundError) {
      res.sendStatus(404);
    } else {
      res.sendStatus(500);
    }
  }
});

movieRouter.get('/movies', async (req: Request, res: Response) => {
  try {
    res.send(await getAllMovies());

  } catch (e) {
    res.sendStatus(500);
  }
});

movieRouter.get('/movies/:movieId', async (req: Request, res: Response) => {
  try {
    const movie = await getMovieById(req.params.movieId);

    if (movie.length === 0) {
      return res.sendStatus(404);
    }

    res.send(movie[0]);

  } catch (e) {
    res.sendStatus(500);
  }
});

export default movieRouter;
