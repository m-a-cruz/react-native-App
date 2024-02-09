const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'sql6.freemysqlhosting.net',
    user: 'sql6682009',
    password: '9MmlmuSNdw',
    database: 'sql6682009'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL successfully');
    }
});

module.exports = db;
