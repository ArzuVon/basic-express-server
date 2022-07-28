//a test has three parts
//Assertion - check to see if something is an expected result


//expect(true).toBe(true); //SGTM
//expect(3).toBe(5); // ?? sus

//test organization - using functions describe, it
//test setup

//going to have number of nested describes
const supertest = require('supertest');
const { db } = require('../src/db');
const server = require('../server.js');

const request = supertest(server.app);

//clears the database...

// describe('Node Server', () => { //description of what we are trying to test
//   it('says hello world', async() =>{ //a single test case
//set up test so it can do a thing
//prepare the server
//(see above)

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

});


//   //test driven development when you write the test first
//   it('returns some data', async () => {
//     const response = await request.get('/data');

//     expect(response.status).toBe(200);
//     expect(response.body).toEqual({
//       name: 'Von',
//       role: 'Developer',
//     });
//   });
