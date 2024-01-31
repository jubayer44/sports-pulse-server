/* eslint-disable no-console */
import express, { Application } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';

const app: Application = express();

const corsConfig = {
  origin: 'https://sports-pulse.vercel.app',
  optionsSuccessStatus: 200,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.use(cors(corsConfig));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', router);

app.use('*', (req, res) => {
  res.send('Route does not exist');
});

app.use(globalErrorHandler);

export default app;
