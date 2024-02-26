const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'v1k.h.filess.io',
    user: 'csfe_grewuseful',
    password: '8d23186fde00076490e6432efbde83a5254e802f',
    database: 'csfe_grewuseful'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL successfully');
    }
});

module.exports = db;
