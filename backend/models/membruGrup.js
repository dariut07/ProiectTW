const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const MembruGrup = sequelize.define('MembruGrup', {
  id_membru: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_grup: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = MembruGrup;
