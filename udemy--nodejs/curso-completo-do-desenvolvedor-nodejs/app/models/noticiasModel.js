module.exports = function() { 
    this.getNoticias = function(connection, callback) {
        connection.query('SELECT * FROM news', callback);
    }

    this.getNoticia = function(connection, callback) {
        connection.query('SELECT * FROM news where id_news = 2', callback);
    }

    return this;
}
