const http = require('http');
const server = http.createServer(function(req, res){
    //Envie uma resposta para o cliente
        res.write("<h1> Voce esta na pagina principal </h1>")
    //Encerre a conexão com o cliente
    res.end();
});

//Faça seu servidor escutar na porta 3000
server.listen(3000, function(){
    //Realize um log no console cada vez que alguém se conectar
    console.log("O servidor está funcionando");
});