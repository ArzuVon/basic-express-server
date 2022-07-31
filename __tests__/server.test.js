//a test has three parts
//Assertion - check to see if something is an expected result


//expect(true).toBe(true); //SGTM
//expect(3).toBe(5); // ?? sus

//test organization - using functions describe, it
//test setup

//going to have number of nested describes
const supertest = require('supertest');

const { db } = require('../src/db');
const server = require('../src/server');

const request = supertest(server.app);

//clears the database...

// describe('Node Server', () => { //description of what we are trying to test
//   it('says hello world', async() =>{ //a single test case
//set up test so it can do a thing
//prepare the server
//(see above)

const response = await request.get('/'); //this response is a promise

expect(response.status).toBe(200);
expect(response.text).toBe('Hello. World'); //class demo

it('returns some data', async () => {
    const response = await request.get('/data');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
        name: 'Von',
        role: 'Developer',
      });
    });

describe('Users', () => {
    beforeEach(async () => {
      await db.sync();
    });
    it('can list a boxer', async () => {
      let listBoxerRes = await request.get('/boxer');
      expect(listBoxerRes.status).toBe(200);
      expect(listBoxerRes.body[0]).toHaveProperty('fightyStyle');
    });
  });

  describe('Users', () => {
    beforeEach(async () => {
      await db.sync();
    });
    it('can list a coder', async () => {
      let listCoderRes = await request.get('/coder');
      expect(listCoderRes.status).toBe(200);
      expect(listCoderRes.body[0]).toHaveProperty('coderName');
    });
  });
