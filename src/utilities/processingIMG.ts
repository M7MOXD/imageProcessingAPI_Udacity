// import fsPromises
import { promises as fsPromises } from 'fs';

// import path
import path from 'path';

// import sharp
import sharp from 'sharp';

// Create Resizing Function
const imgResize = async (
  filename: string,
  width: string,
  height: string
): Promise<string> => {
  const inputImage = path.resolve(`./assets/full/${filename}.jpg`);
  const outputPath = path.resolve(
    `./assets/thumb/${filename}_${width}_${height}_thumb.jpg`
  );
  const xWidth: number = parseInt(width);
  const xHeight = parseInt(height);
  const image = await fsPromises.readFile(inputImage);
  await sharp(image).resize(xWidth, xHeight).toFile(outputPath);
  return outputPath;
};

// export imgResize
export default imgResize;
