'use strict';

const express = require('express');

const hello = (req, res) => {
  res.status(200).send('Hello, World'); //this handle app.get invokes the hello as the / gets called and it sends back a 200 "okay" and then sends the hello world
};
//Sets server up (above)

//Below/(bottom) half allows you to use the server you set up "Okay Go"
const data = (req, res) => {
  res.status(200).send({
    name: 'Von',
    role: 'Developer',
    // where did,  get role() {
    //   return this._role;
    // },
    // set role(value) {
    //   this._role = value;
    // },
  });
};
const app = express();

const logger = (req, res, next) => {
  console.log(Date.now(), req.url);
  next();
};

// app.use(something - a middleware); //something is middleware

//What is a handler?
function handler(req, res, next){
  //request: is an object with a query, endpoints, URL - things the browser sends to the server when
  //response: status, body - what you get back from a server
  //next: a function passed to the middleware , to pass control to the "next"

}

app.get('/', logger, hello); //handler happens at the end and gives data back. Endpoint to your port (3000)
app.get('/data', data); // '/data' is a handler which is a function itself. function takes 2 at once
// ---

function start(port){
  app.listen(port, () => console.log(`Server listening on port ${port}`));
}

module.exports = {
  app,
  start,
};
