const express = require('express');

const app = express();

//Realize um log toda vez que o cliente se conectar
app.use('/',function(req,res){
    console.log("alguem se conectou");
    //Envie uma mensagem dizendo que o cliente se conectou com sucesso
    res.send("<p> Voce se conectou com sucesso ao servidor.</p>");
});
//Peça para o servidor escutar na porta 3500
app.listen(3500, function(){
    console.log("o servidor esta online");
});