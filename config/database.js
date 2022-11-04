/** Destruct environment variable to get database configuration */
// const {
//   DB_USERNAME = null,
//   DB_PASSWORD = null,
//   DB_HOST = "127.0.0.1",
//   DB_NAME = "database",
// } = process.env;
require('dotenv').config();
const path = require('path');

const DB_TEST_FILE_PATH = path.join(__dirname, '../db/test.sqlite');

console.log('lokasi SQLITE, '+DB_TEST_FILE_PATH);

module.exports = {
  development: {
     username: `${process.env.DB_USERNAME}`,
    password: `${process.env.DB_PASSWORD}`,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres", 
    /*storage: DB_TEST_FILE_PATH,
    logging: false,
    dialect: "sqlite",*/
  },
  test: {
    /* username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: `${process.env.DB_NAME}_test`,
    host: process.env.DB_HOST,
    dialect: "postgres", */
    storage: DB_TEST_FILE_PATH,
    logging: false,
    dialect: "sqlite",
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres",
  },
};
