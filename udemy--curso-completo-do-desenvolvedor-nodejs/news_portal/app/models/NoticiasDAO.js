function NoticiasDAO(connection) {
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback) {
    this._connection.query('SELECT * FROM news order by create_data desc', callback);
}

NoticiasDAO.prototype.getNoticia = function(id_news, callback) {
    this._connection.query('SELECT * FROM news where id_news = ' + id_news.id_news, callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback) {
    console.log(noticia);
    this._connection.query('insert into news set ? ', noticia, callback);
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback) {
    this._connection.query('select * from news order by create_data desc limit 5', callback);
}

module.exports = function() { 
    return NoticiasDAO;
}
