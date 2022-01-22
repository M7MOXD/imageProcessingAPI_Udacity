// import express
import express from 'express';

// import path
import path from 'path';

// import fsPromises
import * as fs from 'fs';

// Create Validator Function
const validator = async (
  req: express.Request,
  res: express.Response,
  next: any
): Promise<void> => {
  try {
    const queryFilename: unknown = req.query.filename;
    const queryWidth: unknown = req.query.width;
    const queryHeight: unknown = req.query.height;
    const inputImage = path.resolve(`./assets/full/${queryFilename}.jpg`);
    if (!queryFilename) {
      throw new Error(
        'Parameter filename is empty! Please enter your filename.'
      );
    }
    if (!fs.existsSync(inputImage)) {
      throw new Error(
        'No such file in the directory full! Please place your file in the directory full.'
      );
    }
    if (
      isNaN(parseInt(queryWidth as string)) ||
      isNaN(parseInt(queryHeight as string))
    ) {
      throw new Error('Parameter width or height is not a number!');
    }
    next();
  } catch (e: any) {
    res.status(400).send(e.message);
  }
};

// export validator
export default validator;
