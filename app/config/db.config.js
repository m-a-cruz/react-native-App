const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: '34.124.178.40',
  user: 'task-manager24',
  password: 'bscs2a',
  database: 'csfe3a'
});

// Get a connection from the pool
const db = pool.promise();

db.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL successfully');
  connection.release(); // Release the connection back to the pool
});

module.exports = db;
