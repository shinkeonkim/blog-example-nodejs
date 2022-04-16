import express from 'express';
import router from './routes';

const PORT = process.env.PORT;

const app: express.Application = express();
const db = require('./db');

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/', router);

db();

const server = app.listen(PORT, () => {
  console.log(`server is listening at localhost:${PORT}`);
});

