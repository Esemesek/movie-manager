import Express, { Request, Response, NextFunction } from 'express';
import { addComment, getAllCommentsById } from '../databaseHandler';

const commentRouter = Express.Router();

const validateCommentBody = (body: any): boolean =>
  body.id !== undefined && body.comment !== undefined;

commentRouter.post('/comments', async (req: Request, res: Response) => {
  if (!validateCommentBody(req.body)) {
    return res.sendStatus(400);
  }

  try {
    await addComment(req.body);
    res.send(req.body);

  } catch (e) {
    res.sendStatus(500);
  }
});

commentRouter.get('/comments/:id', async (req: Request, res: Response) => {
  try {
    res.send(await getAllCommentsById(req.params.id));
  } catch (e) {
    res.sendStatus(500);
  }
});

export default commentRouter;
