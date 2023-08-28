const Sequelize = require("sequelize");

const sequelize = new Sequelize("products", "root", "58585858", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
