const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'innate-marking-415510:asia-southeast1:task-manager24',
    user: 'task-manager24',
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
