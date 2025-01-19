import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "databasetw", "daria00", "tehnologiiweb", {
  host: "databasetw.crcy4sg8gj54.eu-north-1.rds.amazonaws.com",
  dialect: 'mysql',
});


module.exports = sequelize;
