const { db } = require('../src/db');
const { createBoxer, getBoxer } = require('../src/routes/boxer');



describe('Boxer route', () => {
  beforeEach(async () => {
    await db.sync();
  });

  it('can create a boxer', async () => {
    const req = {
      body: { boxerName: 'boxer test', fightStyle: 'string' },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    const created = await createBoxer(req, res);

    const boxer = res.send.mock.calls[0][0];
    expect(boxer).toMatchObject({
      boxerName: 'boxer test',
      fightStyle: 'string',

    });
  });

  it('can query a boxer', async () => {
    const createReq = {
      body: { boxerName: 'test boxer', fightStyle: 'southpaw' },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    await createBoxer(createReq, res);

    const createdBoxerId = res.send.mock.calls[0][0].id;
    const getReq = { params: { id: createdBoxerId } };

    await getBoxer(getReq, res);

    expect(res.send.mock.calls[1][0]).toMatchObject({
      id: createdBoxerId,
      boxerName: 'test boxer',
      fightStyle: 'southpaw',
    });
  });

});


//Looked at Davids example for help, was stuck on this
