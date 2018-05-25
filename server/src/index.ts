import Express, { Router } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import Logger from './Logger';
import movieRouter from './routers/movieRouter';

const application = Express();

application.use(bodyParser.json());
application.use(bodyParser.urlencoded({ extended: false }));
application.use(morgan('combined'));

application.use(movieRouter);

application.listen(8080, () => Logger.info('Application listening on 8080'));
