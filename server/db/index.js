const { Pool } = require('pg');
const { USER, HOST, DB, DBPORT, PWD } = require('../../config.js');

const db = new Pool({
  user: USER,
  host: HOST,
  database: DB,
  port: DBPORT,
  password: PWD,
  max: 50
});

db.connect((err) => console.log(err));

module.exports = { db };
