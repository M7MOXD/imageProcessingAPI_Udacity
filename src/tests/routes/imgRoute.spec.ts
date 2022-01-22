// import app
import routes from '../../index';

// import supertest
import supertest from 'supertest';

// Create request
const request = supertest(routes);

// test routes
describe('test routes', () => {
  // main route
  describe('main route', () => {
    // test main route connection
    it('Respond with status 200 "/"', (done) => {
      request
        .get('/')
        .expect(200)
        .end((err) => (err ? done.fail(err) : done()));
    });
  });
  // api route
  describe('api route', () => {
    // test image route connection
    it('Respond with status 200 "/api"', (done) => {
      request
        .get('/api')
        .expect(200)
        .end((err) => (err ? done.fail(err) : done()));
    });
    // test image route with the right parameter
    it('Respond with status 200 "/api/image?success"', (done) => {
      request
        .get('/api/image')
        .query({ filename: 'santamonica', width: 600, height: 400 })
        .expect(200)
        .end((err) => (err ? done.fail(err) : done()));
    });
    // test image route with empty filename
    it('Respond with status 400 "/api/image?err: empty filename"', (done) => {
      request
        .get('/api/image')
        .query({ filename: '', width: 600, height: 400 })
        .expect(400)
        .end((err) => (err ? done.fail(err) : done()));
    });
    // test image route with invalid filename
    it('Respond with status 400 "/api/image?err: invalid filename"', (done) => {
      request
        .get('/api/image')
        .query({ filename: 'invalid', width: 600, height: 400 })
        .expect(400)
        .end((err) => (err ? done.fail(err) : done()));
    });
    // test image route with invalid width
    it('Respond with status 400 "/api/image?err: invalid width"', (done) => {
      request
        .get('/api/image')
        .query({ filename: 'santamonica', width: 'invalid', height: 400 })
        .expect(400)
        .end((err) => (err ? done.fail(err) : done()));
    });
    // test image route with invalid height
    it('Respond with status 400 "/api/image?err: invalid height"', (done) => {
      request
        .get('/api/image')
        .query({ filename: 'santamonica', width: 600, height: 'invalid' })
        .set('Accept', 'image/jpg')
        .expect(400)
        .end((err) => (err ? done.fail(err) : done()));
    });
  });
});
