'use strict';

const express = require('express');
const { logger } = require('./middleware/logger');

require('./db');

const { hello } = require('./handler/hello');
const { data } = require('./handler/data');
const { validator }= require('./middleware/validator');
const {createBoxer, listBoxers, getBoxer, deleteBoxer, updateBoxer } = require('./routes/boxer');
const { createCoder, listCoders, getCoder, deleteCoder, updateCoder } = require('./routes/coder');
const { db } = require('./db');

const app = express();

app.use(logger);
app.use(express.json());

app.get('/', hello); //handler happens at the end and gives data back. Endpoint to your port (3000)
app.get('/data', data); // '/data' is a handler which is a function itself. function takes 2 at once
// app.get('/throw-error', makeError);
// app.get('/pets/:pet', pet);

app.get('/boxer', listBoxers);
app.post('/boxer', createBoxer);
app.get('/boxer/:id', getBoxer);
app.delete('/boxer/:id', deleteBoxer);
app.put('/boxer/:id', updateBoxer);

app.get('/coder', listCoders);
app.post('/coder', createCoder);
app.get('/coder/:id', getCoder);
app.delete('/coder/:id', deleteCoder);
app.put('/coder/:id', updateCoder);

app.use(pageError);
app.use(serverError);


const shouldSyncOnStart = true;
async function start(port){
    if(shouldSyncOnStart){
        await db.sync();
    }
app.listen(port, () => console.log(`Server listening on port ${port}`));

}

module.exports = {
  app,
  start,
};



// const makeError = (req, res) => {
//     throw new Error('This is the error handler!');
//   };

//   const pet = (req, res) => {
//     res.status(200).send({name: req.params.pet});
//   };

//   const app = express();
