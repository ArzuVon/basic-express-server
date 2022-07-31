'use strict';

const express = require('express');
const { logger } = require('./middleware/logger');

const { hello } = require('./handler/hello');
const { data } = require('./handler/data');

const makeError = (req, res) => {
  throw new Error('This is the error handler!');
};

const pet = (req, res) => {
  res.status(200).send({name: req.params.pet});
};

const app = express();

app.use(logger);

app.get('/', hello); //handler happens at the end and gives data back. Endpoint to your port (3000)
app.get('/data', data); // '/data' is a handler which is a function itself. function takes 2 at once
app.get('/throw-error', makeError);
app.get('/pets/:pet', pet);

// ---


function start(port){
  app.listen(port, () => console.log(`Server listening on port ${port}`));
}

module.exports = {
  app,
  start,
};
