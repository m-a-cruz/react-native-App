const mysql = require('mysql2');

const db = mysql.createPool({
    connectionLimit: 10, // Maximum number of connections in the pool
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

module.exports = db;