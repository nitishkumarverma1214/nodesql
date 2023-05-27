const { Sequelize } = require("sequelize");
const dbConfig = require("./db.config.js");

// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: "",
//   dialect: dbConfig.dialect,
//   port: dbConfig.port,
// });

const { HOST, PASSWORD, DB, dialect, USER, port } = dbConfig;
const sequelize = new Sequelize(
  `${dialect}://${USER}:${PASSWORD}@${HOST}:${port}/${DB}`,
);

// create a table if it doesn't exists and does nothing if it exists
(async () => {
  await sequelize.sync();
})();

module.exports = sequelize;
