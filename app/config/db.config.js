const mysql = require('mysql2');

const db = mysql.createPool({
    connectionLimit: 10, // Maximum number of connections in the pool
<<<<<<< HEAD
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'personalTaskManager'
  });
  
//   // Example query
//   db.query('SELECT * FROM users', (error, results, fields) => {
//     if (error) {
//       console.error('Error executing query:', error);
//       return;
//     }
//     console.log('Query results:', results);
//   });
  
//   // Don't forget to end the pool when done
//   db.end((error) => {
//     if (error) {
//       console.error('Error ending pool:', error);
//       return;
//     }
//     console.log('Pool has been closed');
//   });
=======
    host: '193.203.166.156',
    user: 'u672161143_bwisit',
    password: 'Bwisit1.',
    database: 'u672161143_bwisit'
  });
>>>>>>> 8ae61ab5df30ab94c7cb67fdba01d46c56f7c8fc

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
