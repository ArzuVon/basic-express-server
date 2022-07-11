//a test has three parts
//Assertion - check to see if something is an expected result


//expect(true).toBe(true); //SGTM
//expect(3).toBe(5); // ?? sus

//test organization - describe, it
//test setup

//going to have number of nested describes
 const supertest = require("supertest");
 const server = require("../server.js");

 const request = supertest(server.app);


describe("Node Server", () => {
    it("says hello world", async() =>{
        //set up test so it can do a thing
        //prepare the server
        //(see above)

        //perform an action, that does the thing
        //request th /route
        const response = await request.get("/"); //the request is a promise

        //assert or expect the result of the action
        // expect the / route to respond with hello
        expect(response.status).toBe(200);
        expect(response.text).toBe("Hello, World");

    });

    //test driven development when you write the test first
    it("returns some data", async () => {
        const request = supertest(server.app);

        const response = await request.get("./data");

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            name: "Von",
            role: "Developer",
        });
    });
});


