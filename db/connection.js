var mysql = require("mysql");
const util = require("util");
require("dotenv").config()

var connection = mysql.createConnection({
    host: "localhost",


    port: 3306,


    user: "root",


    password: process.env.mysqlpassword,
    database: "tracker_db"
});

connection.connect(function (err, res) {
    if (err) throw err;
    console.log("Connected as"+ connection.threadId)
});
connection.query = util.promisify(connection.query);

module.exports = connection;