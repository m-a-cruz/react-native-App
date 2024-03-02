const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'pwi.h.filess.io',
    user: 'csfe_selection',
    password: 'a29f2e99888908b433e6dc0c79df6a7cfb4381e9',
    database: 'csfe_selection'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL successfully');
    }
});

module.exports = db;
