var mysql = require('mysql');
var pool  = mysql.createPool({
    connectionLimit : 10,
    host: '127.0.0.1',
    user: 'root',
    password: '654321',
    database: 'express',
    port:'3306'
});


pool.getConnection(function(err, connection) {
    if (err) throw err; // not connected!

    // Use the connection
    connection.query('SELECT * FROM users', function (error, results, fields) {
        console.log(results);
        connection.release();

        // Handle error after the release.
        if (error) throw error;

        // Don't use the connection here, it has been returned to the pool.
    });
});