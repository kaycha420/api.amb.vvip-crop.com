const mysql = require("mysql");
const util = require('util');
const pool = mysql.createConnection({
    host: '45.144.167.166',
    port: '3306',
    database: 'admin_db_ufa',
    user: 'admin_db_ufa',
    password: '9bY2?w07h'
});

pool.query = util.promisify(pool.query)

module.exports = pool;