const mysql = require('mysql2');
const db = mysql.createConnection({
    host: '89.116.192.127',
    user: 'u672161143_bwisit',
    password: 'Bwisit1.',
    database: 'u672161143_bwisit'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL successfully');
    }
});

module.exports = db;
