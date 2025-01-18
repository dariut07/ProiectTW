const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Rezervare = sequelize.define('Rezervare', {
  id_rezervare: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_produs: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_claimer: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  data_cererii: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Rezervare;
