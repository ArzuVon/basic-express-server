'use strict';

const express = require('express');

const hello = (req, res) => {
    res.status(200).send("Hello, World");
}

const app = express();

app.get('/', hello);

function start(port){
    app.listen(port, () => console.log(`Server listening on port ${port}`));
}
