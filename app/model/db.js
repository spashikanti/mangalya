const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    user: 'root',
    password: 'welcome@12345',
    database: 'admin_db',
    host: 'localhost',
    port: '3306'
});

module.exports = pool;