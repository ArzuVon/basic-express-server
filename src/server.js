'use strict';

const express = require('express');
const { logger } = require('./middleware/logger');
const { hello } = require('./handler/hello');
const { data } = require('/handler/data');



const app = express();

// app.use(something - a middleware); //something is middleware

//What is a handler? - function
function handler(req, res, next){
  //request: is an object with a query, endpoints, URL - things the browser sends to the server when
  //response: status, body - what you get back from a server
  //next: a function passed to the middleware , to pass control to the "next"
}

app.use(logger);
app.get('/', hello); //handler happens at the end and gives data back. Endpoint to your port (3000)
app.get('/data', data); // '/data' is a handler which is a function itself. function takes 2 at once
// ---

function start(port){
  app.listen(port, () => console.log(`Server listening on port ${port}`));
}

module.exports = {
  app,
  start,
};
