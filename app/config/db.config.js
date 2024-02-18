const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'sql6684970',
    password: 'SvvV5iLBAm',
    database: 'sql6684970'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL successfully');
    }
});

module.exports = db;
