const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Notificare = sequelize.define('Notificare', {
  id_notificare: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  mesaj: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  data_primire: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  status: {
    type: DataTypes.ENUM('UNREAD', 'READ'),
    allowNull: false,
    defaultValue: 'UNREAD',
  },
});

module.exports = Notificare;
