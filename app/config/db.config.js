const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'id21873293_personaltaskmanager',
    password: 'taskManager1.',
    database: 'id21873293_personaltaskmanager'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL successfully');
    }
});

module.exports = db;
