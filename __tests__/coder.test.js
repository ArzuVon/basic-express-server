const { db } = require('../src/db');
const { createCoder, getCoder } = require('../src/routes/coder');


describe('Coder route', () => {
  beforeEach(async () => {
    await db.sync();
  });

  it('can ctreate a coder', async () => {
    const req = {
      body: { coderType: 'coder test', hobby: 'string' },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    const created = await createCoder(req, res);

    const coder = res.send.mock.calls[0][0];
    expect(coder).toMatchObject({
      coderType: 'coder test',
      hobby: 'string',
    });
  });

  it('can query a coder', async () => {
    const createReq = {
      body: { coderType: 'test coder', hobby: 'gym' },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    await createCoder(createReq, res);

    const createdCoderId = res.send.mock.calls[0][0].id;
    const getReq = { params: { id: createdCoderId } };

    await getCoder(getReq, res);

    expect(res.send.mock.calls[1][0]).toMatchObject({
      id: createdCoderId,
      coderType: 'test coder',
      hobby: 'gym',
    });
  });
});
