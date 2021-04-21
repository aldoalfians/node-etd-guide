const mqsql = require("mysql2");

const pool = mqsql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'node-complete',
});

module.exports = pool.promise();
