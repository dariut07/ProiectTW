const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const SocialShare = sequelize.define('SocialShare', {
  id_share: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_produs: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  platforma: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data_share: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = SocialShare;
