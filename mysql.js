const mysql = require('mysql');

var pool = mysql.createPool({
    "connectionLimit" : 1000,
    "user" : 'root',
    "password": 'mypass',
    "database" : 'acervus',
    "host": 'localhost',
    "port" : 3306
});

exports.execute = (query, params=[]) => {
    return new Promise((resolve, reject) => {
        pool.query(query, params, (error, result, fields) => {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                resolve(result)
            }
        });
    })
}

exports.pool = pool;