const mysql = require("mysql");

var mysqlConnection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "password",
    database : "essaydb",
    multipleStatements : true
});

mysqlConnection.connect(function(err){
    if (err) throw err;
  console.log("Connected!");

});

module.exports = mysqlConnection;