import express from 'express';
import router from './routes';

const app: express.Application = express();

const port = process.env.PORT;

app.use('/', router);

const server = app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`);
});
