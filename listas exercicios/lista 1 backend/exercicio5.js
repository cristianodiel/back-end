const express = require('express');

const app = express();

//Realize um log toda vez que o cliente se conectar
app.use('/',function(req,res){
    //console.log("alguem se conectou");
    res.send("<p> Voce se conectou com sucesso ao servidor.</p>");
    //Quando o cliente se conectar, faça um log no console com a data e hora atual
    var now = new Date();
    var getTheDate = (now.toLocaleString());

    
    console.log(getTheDate);
});
//Peça para o servidor escutar na porta 3500

app.listen(3500, function(){
    console.log("o servidor esta online");
});