const http = require('http');
const server = http.createServer(function(req, res){
    //Este servidor deverá receber a url em uma variável
    const url = req.url
    //A cada conexão, deverá ser enviado para o cliente a mensagem de que ele acessou o servidor usando a url informada.
    if(url === '/'){
        res.write("<h1> Voce esta na pagina principal </h1>")
    }else{
        res.write(`Voce esta acessando a pagina ${url}`)
    }
    //Encerre a conexão com o cliente
    res.end();
});

//Faça seu servidor escutar na porta 3000

server.listen(3000, function(){
    //Realize um log no console cada vez que alguém se conectar
    console.log("O servidor está funcionando");
});