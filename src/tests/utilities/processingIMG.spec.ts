// import path
import path from 'path';

// import imgResize
import imgResize from '../../utilities/processingIMG';

// testing utilities function "imgResize"
describe('testing utilities', () => {
  const filename = 'santamonica';
  const width = 600;
  const height = 400;
  const outputPath = path.resolve(
    `./assets/thumb/${filename}_${width}_${height}_thumb.jpg`
  );
  it('imgResize must return the outputPath', async () => {
    expect(
      await imgResize(
        'santamonica',
        600 as unknown as string,
        400 as unknown as string
      )
    ).toEqual(outputPath);
  });
});
