var app = require('./config/server');

var server = app.listen(3000, function() {
    console.log('Servidor online');
});

var io = require('socket.io').listen(server); 

app.set('io', io);

io.on('connection', function(socket) {
    console.log('Usuário conectou');

    socket.on('disconnect', function() {
        console.log('Usuário desconectou');
    });

    socket.on('msgParaServidor', function(data) {
        socket.emit(
            'msgParaCliente', 
            { nickName : data.nickName, message : data.message }
        );

        socket.broadcast.emit(
            'msgParaCliente', 
            { nickName : data.nickName, message : data.message }
        );        
        
        if (parseInt(data.apelido_atualizado_nos_clientes) == 0) {        
            socket.emit(
                'participantesParaCliente',
                { nickName : data.nickName }
            );
    
            socket.broadcast.emit(
                'participantesParaCliente',
                { nickName : data.nickName }
            );
        }
    });
});
