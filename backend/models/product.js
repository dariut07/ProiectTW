const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Produs = sequelize.define('Produs', {
  id_produs: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nume: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categorie_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cantitate: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  unitate_masura: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data_expirare: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('DISPONIBIL', 'REZERVAT'),
    allowNull: false,
  },
  data_adaugare: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Product;
