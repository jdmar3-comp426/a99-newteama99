// This ensures that things do not fail silently but will throw errors instead.
"use strict";
// Require better-sqlite.
const Database = require('better-sqlite3');

// Connect to a database or create one if it doesn't exist yet.
const db = new Database('user.db');

// Is the database initialized or do we need to initialize it?
const stmt = db.prepare(`SELECT name FROM sqlite_master WHERE type='table' and name='userinfo';`);
let row = stmt.get();
if (row === undefined) {
// Echo information about what you are doing to the console.
    console.log('Your database appears to be empty. I will initialize it now.');
// Set a const that will contain your SQL commands to initialize the database.
// first table contains user info
// second table contains save data
    const sqlInit = `
        CREATE TABLE userinfo ( id INTEGER PRIMARY KEY, user TEXT, pass TEXT , email TEXT, guesses INTEGER, first_row INTEGER, second_row INTEGER, third_row INTEGER, fourth_row INTEGER, fifth_row INTEGER, sixth_row INTEGER, seventh_row INTEGER, eighth_row INTEGER, ninth_row INTEGER);
        INSERT INTO userinfo(user, pass email) VALUES ('admin', 'bdc87b9c894da5168059e00ebffb9877', 'admin@somedomain.com', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0) 
        `;
// Execute SQL commands that we just wrote above.
    db.exec(sqlInit);
// Echo information about what we just did to the console.
    console.log('Your database has been initialized with a new table and two entries containing a username, password, and email address.');
} else {
// Since the database already exists, echo that to the console.
    console.log('Database exists.')
}
// Export all of the above as a module so that we can use it elsewhere.
module.exports = db
