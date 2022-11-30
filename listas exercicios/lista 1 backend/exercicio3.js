const http = require('http');
const server = http.createServer(function(req, res){
    //recebendo a url em uma variável
    const url = req.url
    //A cada conexão, deverá ser enviado para o cliente a mensagem de que ele acessou o servidor usando a url informada.
    if(url === '/'){
        res.write("<h1> Voce esta na pagina principal </h1>")
    }else if(url === '/usuario'){
        //Se o caminho digitado for igual a /usuário, exiba um texto indicando que o cliente se conectou na base de dados do usuário
        res.write('<p>O cliente se conectou a base de dados do usuario</p>')

    }else if(url === '/produtos'){
        //Se o caminho digitado foi igual a produtos, exiba um texto dizendo que o cliente irá cadastrar um novo produto
        res.write('<p>O cliente ira conectar um novo produto</p>')
    }
    else{
        //Se o caminho não for nem um nem o outro, mostre uma página de erro.
        res.write('<p>Erro! Por favor verifique se o caminho digitado esta correto.</p>')
    }
    //Encerrando a conexão com o cliente
    res.end();
});

//Faça seu servidor escutar na porta 3000

server.listen(3000, function(){
    //Realize um log no console cada vez que alguém se conectar
    console.log("O servidor está funcionando");
});