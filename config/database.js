require('dotenv').config();
const { Pool } = require('pg');

const db = new Pool({
  user: process.env.USER_DB,
  host: process.env.HOST_DB,
  database: process.env.NAME_DB,
  password: process.env.PASSWORD_DB,
  port: process.env.PORT_DB,
  max: 60,
});

module.exports = db;
