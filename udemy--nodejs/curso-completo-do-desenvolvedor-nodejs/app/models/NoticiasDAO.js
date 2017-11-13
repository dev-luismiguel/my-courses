function NoticiasDAO(connection) {
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback) {
    this._connection.query('SELECT * FROM news', callback);
}

NoticiasDAO.prototype.getNoticia = function(callback) {
    this._connection.query('SELECT * FROM news where id_news = 2', callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback) {
    console.log(noticia);
    this._connection.query('insert into news set ? ', noticia, callback)
}

module.exports = function() { 
    return NoticiasDAO;
}
