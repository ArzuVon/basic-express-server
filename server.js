'use strict';

const express = require('express');

const hello = (req, res) => {res.status(200).send('Hello, World'); //this handle app.get invokes the hello as the / gets called and it sends back a 200 "okay" and then sends the hello world
};
//Sets server up (above)

//Below/(bottom) half allows you to use the server you set up "Okay Go"
const data = (req, res) => {
  res.status(200).send({
    name: 'Von',
    role: 'Developer',
    // get role() {
    //   return this._role;
    // },
    // set role(value) {
    //   this._role = value;
    // },
  });
};
const app = express();

app.get('/', hello); //handler happens at the end and gives data back. Endpoint to your port (3000)
app.get('/data', data);
// ---

function start(port){
  app.listen(port, () => console.log(`Server listening on port ${port}`));
}

module.exports = {
  app,
  start,
};
