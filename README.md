# Image Processing API

## Overview

This project aims to give you a real-world scenario in which you would read and write to your disk via a Node.js express server rather than a database. The project you create serves two purposes: to prepare you for setting up scalable code and architecture for real-world projects and tie together some of the most popular middleware and utilities found in Node.js projects. This project barely touches the surface of what is possible but will prove your ability to use what you’ve learned in real-world scenarios.

## How to build and start the server

The project can be built and run in the following ways

### 1. Install all dependencies

`npm i`

### 2. Build

`npm run build`

This command will build the typeScript code into JavaScript and save them in the `./dist` folder.

### 3. Start the Server after Build

`npm run start`

This command will start the server running on port `3000`.

## Testing and Linting

Here, I will show you how to run the test and also how to check that our code respects all the eslint rules.

### 1. Linting

`npm run lint`

### 2. Formating

`npm run prettier`

### 3. Testing

`npm run test`

## Endpoint

### `/api/image/?filename=<image_name>&width=<image_width>&height=<image_height>`

Method: `get`
URL Params: `height` and `width` - the height or width of the image in pixels
Query Param: `filename` - the specific image you are requesting.

    For example: `localhost:3000/api/image/?filename=fjord&width=400&height=600`

#### Available Image options

1. `encenadaport`
2. `fjord`
3. `icelandwaterfall`
4. `palmtunnel`
5. `santamonica`

### Functionality

- User can query endpoint using various params and queries to retrieve an image with a specified height and width.
- All images requested will be saved to disk.
- There is a cache layer. If a user requests an image size that has already been requested, there is no need for resizing and the previously resized image will be returned.

## Built With

- [NodeJS](https://nodejs.org/en/) - The JavaScript runtime.
- [Express](https://expressjs.com/) - The web framework.
- [TypeScript](https://www.typescriptlang.org/) - The language used.
- [Sharp](https://sharp.pixelplumbing.com/) - NodeJS image processor.
