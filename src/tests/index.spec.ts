// import app
import app from '../index';

// import supertest
import supertest from 'supertest';

// Create request
const request = supertest(app);

// test app
describe('test app', () => {
  // test main route
  it('Respond with status 200', (done) => {
    request
      .get('/')
      .expect(200)
      .end((err) => (err ? done.fail(err) : done()));
  });
  // test api route
  it('Respond with status 200', (done) => {
    request
      .get('/api')
      .expect(200)
      .end((err) => (err ? done.fail(err) : done()));
  });
});
