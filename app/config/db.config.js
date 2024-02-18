const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'sql6.freemysqlhosting.net',
    user: 'sql6684965',
    password: 'sIUnSPNxaD',
    database: 'sql6684965'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL successfully');
    }
});

module.exports = db;
