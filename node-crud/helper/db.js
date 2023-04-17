const mysql = require("mysql2");

//mysql connection
const db = mysql
    .createConnection({
        host: "localhost",
        user: "root",
        database: "contactsdb",
        password: ""
    })
    
db.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });     

module.exports = db;