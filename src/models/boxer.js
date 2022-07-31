const sequelize = require('sequelize');

function boxer(db) {
  return db.define('Boxer',{
    boxerName: {
      type: sequelize.DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    fightyStyle: sequelize.DataTypes.STRING,
  });

}
