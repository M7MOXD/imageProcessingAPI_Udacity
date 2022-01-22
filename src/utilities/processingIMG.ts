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
  const inputImage = path.resolve(`./src/assets/full/${filename}.jpg`);
  const outputPath = path.resolve(
    `./src/assets/thumb/${filename}_${width}_${height}_thumb.jpg`
  );
  const xWidth: number = parseInt(width as string);
  const xHeight = parseInt(height as string);
  const image = await fsPromises.readFile(inputImage);
  await sharp(image).resize(xWidth, xHeight).toFile(outputPath);
  return outputPath;
};

// export imgResize
export default imgResize;
