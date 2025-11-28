const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host : process.env.HOST,
    password : process.env.PASSWORD,
    database : process.env.DATABASE,
    user : process.env.USER,
    connectionLimit : 10,
    queueLimit : 0,
    waitForConnections : true,
})
console.log("MySQL  connected ✅");
module.exports = pool;