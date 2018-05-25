import Express, { Router, Application } from 'express';
import bodyParser from 'body-parser';

export default (router: Router): Application => {
  const app = Express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(router);

  return app;
}
