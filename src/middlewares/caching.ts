// import express
import express from 'express';

// import path
import path from 'path';

// import fsPromises
import * as fs from 'fs';

// Create Caching Function
const caching = async (
  req: express.Request,
  res: express.Response,
  next: any
): Promise<void> => {
  try {
    const queryFilename: unknown = req.query.filename;
    const queryWidth: unknown = req.query.width;
    const queryHeight: unknown = req.query.height;
    const cachedImg = path.resolve(
      `./assets/thumb/${queryFilename}_${queryWidth}_${queryHeight}_thumb.jpg`
    );
    const image = fs.existsSync(cachedImg);
    if (image) {
      return res.status(200).sendFile(cachedImg);
    }
    next();
  } catch (e: any) {
    res.status(400).send(e.message);
  }
};

// export caching
export default caching;
