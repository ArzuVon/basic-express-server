const supertest = require('supertest'); // can also write as import?
const { db } = require('../src/db');
const server = require('../src/server.js');
const request = supertest(server.app);


// clears our database


  describe('models', () => {
    beforeEach(async () =>{
      await db.sync();

    });

    //Creates Boxer
  it('creates a boxer', async () => {
    let response = await request.post('/boxer').send({
      boxerType: 'Test boxer',
      fightStyle: 'string',
    });

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      boxerType: 'Test boxer',
      fightStyle: 'string', //in Test Driven Developemnt write test first than minimum amount of code
    });
  });

  //Grabs or post a boxer
  it('retrieves a boxer', async () => {
    let createResponse = await request.post('/boxer').send({
      boxerType: 'Test boxer',
      fightStyle: 'string',
    });

    expect(createResponse.status).toBe(200);
    const createdId = createResponse.body.id;

    let retrieveResponse = await request.get(`/boxer/${createdId}`);

    expect(retrieveResponse.status).toBe(200);
    expect(retrieveResponse.body).toMatchObject({
      boxerType: 'Test boxer',
      fightStyle: 'string',
    });
  });

  //it Lists Boxer
  it('can list a boxer', async () =>{
    let listBoxerRes = await request.get('/boxer');
    expect(listBoxerRes.status).toBe(200);
    expect(listBoxerRes.body[0]).toHaveProperty('boxerType');
  });

  //it deleted boxer
  it('deletes a boxer', async() => {
    let createResponse = await request.post('/boxer').send({
      boxerType: 'Test boxer',
      fightStyle: 'string',
    });

    expect(createResponse.status).toBe(200);
    const createdId = createResponse.body.id;

    let retrieveResponse = await request.delete(`/boxer/${createdId}`);
    expect(retrieveResponse.status).toBe(200);

  });

  //it Updates boxer
  it.skip('can update a boxer', async ()=>{
    let createResponse = await request.post('/boxer').send({
      boxerType: 'Test boxer',
      fightStyle: 'string',
    });

    expect(createResponse.status).toBe(200);
    const createdId = createResponse.body.id;

    const updateRes = await request.put(`/boxer/${createdId}`).send({ boxerType: 'light weight'});
    expect(updateRes.status).toBe(200);

  });

  //Creates Coder

  it('creates a coder', async () => {
    let response = await request.post('/coder').send({
      coderType: 'Test coder',
      hobby: 'string',
    });

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      coderType: 'Test coder',
      hobby: 'string', //in Test Driven Developemnt write test first than minimum amount of code
    });
  });

  //Grabs or post a Coder
  it('retrieves a coder', async () => {
    let createResponse = await request.post('/coder').send({
      coderType: 'Test coder',
      hobby: 'string',
    });

    expect(createResponse.status).toBe(200);
    const createdId = createResponse.body.id;

    let retrieveResponse = await request.get(`/coder/${createdId}`);

    expect(retrieveResponse.status).toBe(200);
    expect(retrieveResponse.body).toMatchObject({
      coderType: 'Test coder',
      hobby: 'string',
    });
  });

  //it Lists Coder
  it('can list a coder', async () =>{
    let listBoxerRes = await request.get('/coder');
    expect(listBoxerRes.status).toBe(200);
    expect(listBoxerRes.body[0]).toHaveProperty('coderType');
  });

  //it deleted coder
  it('deletes a coder', async() => {
    let createResponse = await request.post('/coder').send({
      coderType: 'Test coder',
      hobby: 'string',
    });

    expect(createResponse.status).toBe(200);
    const createdId = createResponse.body.id;

    let retrieveResponse = await request.delete(`/coder/${createdId}`);
    expect(retrieveResponse.status).toBe(200);

  });

  //it Updates coder
  it.skip('can update a coder', async ()=>{
    let createResponse = await request.post('/coder').send({
      coderType: 'Test coder',
      hobby: 'string',
    });

    expect(createResponse.status).toBe(200);
    const createdId = createResponse.body.id;

    const updateRes = await request.put(`/boxer/${createdId}`).send({ coderType: 'light weight'});
    expect(updateRes.status).toBe(200);

  });

  it('should respond 500 on an error', async () => {
    const response = await request.get('/throw-error');

    expect(response.status).toBe(500);
  });

});


  //test driven development when you write the test first
  it('returns some data', async () => {
    const response = await request.get('/data');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      name: 'Von',
      role: 'Developer',
    });
  });
