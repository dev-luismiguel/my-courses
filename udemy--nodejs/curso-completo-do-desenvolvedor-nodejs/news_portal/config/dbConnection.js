var mysql = require('mysql');

var connMySQL = function() {
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'masterkey',
        database: 'news_portal'
    });
}

module.exports = function() {
    return connMySQL;
}