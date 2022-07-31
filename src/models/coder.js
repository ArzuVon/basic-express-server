const sequelize = require('sequelize');

function coder(db){
  return db.define('Coder',{
    coderName:{
      type: sequelize.DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    hobby: sequelize.DataTypes.STRING,
  });

}
