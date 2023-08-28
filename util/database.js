const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "products",
  password: "58585858",
});

module.exports = pool.promise();
