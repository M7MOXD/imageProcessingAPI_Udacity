// import express
import express from 'express';

// import imgRoute
import routes from './routes/imgRoute';

// Create app
const app = express();

// Create port
const port = process.env.PORT || 3000;

// main route
app.get('/', (req: express.Request, res: express.Response) => {
  res.send(
    'Welcome into the Image Processing API, To start add "/api" to your url and follow the instruction'
  );
});

// use routes
app.use('/api', routes);

// run server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// export app
export default app;
