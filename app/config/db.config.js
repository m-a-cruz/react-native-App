const mysql = require('mysql2');
const db = mysql.createConnection({
    host: '34.124.178.40',
    user: 'csfe3a',
    password: 'bscs2a',
    database: 'csfe3a'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL successfully');
    }
});

module.exports = db;
