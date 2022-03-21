import express from 'express';


const app: express.Application = express();

const port = process.env.PORT || 1235;

app.get('/', (req, res) => {
  res.json({
    success: true
  })
});

const server = app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`);
});
