module.exports.iniciaChat = function(app, req, res) {
    var dadosForm = req.body;
    req.assert('nickName', 'Nome ou apelido é obrigatório').notEmpty();
    req.assert('nickName', 'Nome ou apelido deve conter entre 3 e 15 caracteres').len(3, 15);

    var errors = req.validationErrors();

    if (errors) {
        res.render("index", { validator : errors });
        return;
    }

    app.get('io').emit(
        'msgParaCliente', 
        { nickName : dadosForm.nickName, message : ' acabou de entrar no chat ' }
    );

    res.render('chat', { dadosForm : dadosForm });
}
