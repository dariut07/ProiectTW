//MOMENTAN ESTE DOAR SCHEMA CODULUI 
//NU AM IMPLEMENTAT NICUN BD
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => console.log('Conexiune reușită la baza de date!'))
  .catch((err) => console.error('Eroare la conectare:', err));

module.exports = sequelize;
