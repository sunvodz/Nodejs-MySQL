const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// open the MySQL connection
connection.connect(error => {
  if (error) {
     console.log("ERROR connected to the database.");
     console.log("ERROR connected SQL");

      throw error
    };
  console.log("Successfully connected to the database.");
});

module.exports = connection;