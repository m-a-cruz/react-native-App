const mysql = require('mysql2');

const db = mysql.createPool({
    connectionLimit: 10, // Maximum number of connections in the pool
    host: '193.203.166.156',
    user: 'u672161143_bwisit',
    password: 'Bwisit1.',
    database: 'u672161143_bwisit'
  });

// const db = mysql.createConnection({
//     host: '193.203.166.156',
//     user: 'u672161143_bwisit',
//     password: 'Bwisit1.',
//     database: 'u672161143_bwisit'
// });

// db.connect((err) => {
//     if (err) {
//         console.error('Error connecting to MySQL:', err);
//     } else {
//         console.log('Connected to MySQL successfully');
//     }
// });

module.exports = db;
