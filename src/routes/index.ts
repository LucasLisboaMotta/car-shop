import 'express-async-errors';
import express from 'express';
import cars from './cars.routes';
import errorMiddleware from '../helpers/error.middleware';
import motorcycles from './motorcycles.routes';

const routes = express();
routes.use(express.json());

routes.use('/cars', cars);
routes.use('/motorcycles', motorcycles);

routes.use(errorMiddleware);

export default routes;