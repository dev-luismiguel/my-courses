module.exports.formulario_inclusao_noticia = function(application, req, res) {
    res.render('admin/form_add_noticia', { validator : {}, noticia : {}} );    
}

module.exports.noticias_salvar = function(application, req, res) {
    var noticia = req.body;
    
    req.assert('title', 'Título é obrigatório').notEmpty();
    req.assert('summary', 'Resumo é obrigatório').notEmpty();
    req.assert('summary', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
    req.assert('autor', 'Autor é obrigatório').notEmpty();
    req.assert('news_date', 'Data é obrigatório').notEmpty();
    req.assert('news', 'Notícia é obrigatório').notEmpty();
    
    var errors = req.validationErrors();
    
    if (errors) {
        res.render("admin/form_add_noticia", { validator : errors, noticia : noticia});
        return;
    }
    
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);
    noticiasModel.salvarNoticia(noticia, function(error, result) {
        res.redirect('/noticias');
    });
}
