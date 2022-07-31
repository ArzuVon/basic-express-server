const supertest = require('supertest');
const { person } = require('../src/handler/person'); //using person instead of data but same thing


const { app } = require('../src/server');

describe('API routes', () => {
  describe('person', () => {
    it('fills in a person', () => {
      const req = { method: 'GET', url: '/person?name=von', query: { name: 'von' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn().mockReturnThis(),
      };

      person(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({ name: 'von' });
    });
    it('uses the validator for person', async () => {
      const request = supertest(app);
      const result = await request.get('/person/');

      expect(result.status).toBe(404);
    });
  });

});
