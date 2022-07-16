//a test has three parts
//Assertion - check to see if something is an expected result


//expect(true).toBe(true); //SGTM
//expect(3).toBe(5); // ?? sus

//test organization - using functions describe, it
//test setup

//going to have number of nested describes
const supertest = require('supertest');
const server = require('../server.js');

const request = supertest(server.app);


describe('Node Server', () => { //description of what we are trying to test
  it('says hello world', async() =>{ //a single test case
    //set up test so it can do a thing
    //prepare the server
    //(see above)

    //perform an action, that does the thing
    //request the /route
    const response = await request.get('/'); //the request is a promise

    //assert or expect the result of the action
    // expect the / route to respond with hello, the thing you want to look at
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, World');

  });

  //test driven development when you write the test first
  it('returns some data', async () => {
    const response = await request.get('/data');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      name: 'Von',
      role: 'Developer', //in Test Driven Developemnt write test first than minimum amount of code
    });
  });
});


