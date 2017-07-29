import request from 'supertest';
import app from '../server.js';
// import validFile from '../fixtures/validFile.json';

const api = request(app);


describe('Api create route', () => {
  // Create Index route status test
  it('should respond with all indices in JSON format', (done) => {
    api
      .post('/api/create')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200, done);
  });

  // Search Index route status test
  it('should respond with search results for all files', (done) => {
    api
      .post('/api/search')
      .attach('files')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200, done);
  });
});
