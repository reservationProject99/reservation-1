const { Client } = require('pg');
require('dotenv').config();

const dbConfig = {
    user: 'postgres',
    host: 'localhost',
    database: 'QuickRide',
    password: process.env.PASSWORD_POSTGRES,
    port: 5433,
};

const db = new Client(dbConfig);

db.connect( (err) => {
    if (err) throw err;
    console.log("Connected!");
});

// Export the function to create and connect to the database
module.exports = db;