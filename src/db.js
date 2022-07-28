const { Sequelize } = require('sequelize');
const { boxer } = require('./models/boxer');
const { coder } = require('./models/coder');

let connection_string;
switch (process.env.NODE_ENV){
case 'production':
  connection_string = process.env.DATABASE_URL;
  break;
case 'dev':
case 'staging':
  connection_string = 'sqlite::memory:';
  break;
  default:
    connection_string = `sqlite:${process.env.SQLITE_FILE ?? '../db'}`;
    break;
}

const db = new Sequelize(connection_string,{
    dialectOptions: {
        ssl: {
            require: true,
            rejectionUnauthorized: false,
        },
    },
});

module.exports = {
    db,
    Boxer: boxer(db),
    Coder: coder(db),
};




