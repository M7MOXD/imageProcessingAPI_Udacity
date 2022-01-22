// import express
import express from 'express';

// import middlewares
import caching from '../middlewares/caching';
import vaidator from '../middlewares/validator';

// import utilities
import imgResize from '../utilities/processingIMG';

// Create routes using express.Router()
const routes = express.Router();

// main API route
routes.get('/', (req, res) => {
  res.send(
    'Hi, now add "/image" to your url followed by your filename and the width and height you want e.g.: /api/image?filename="your filename"&width="the width you want"&height="the height you want"'
  );
});

// GET route
routes.get('/image', vaidator, caching, async (req, res) => {
  try {
    const queryFilename: unknown = req.query.filename;
    const queryWidth: unknown = req.query.width;
    const queryHeight: unknown = req.query.height;
    const imageResized = await imgResize(
      queryFilename as string,
      queryWidth as string,
      queryHeight as string
    );
    res.status(200).sendFile(imageResized);
  } catch (e: any) {
    res.status(400).send(e.message);
  }
});

// export routes
export default routes;
