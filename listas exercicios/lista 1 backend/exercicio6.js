const express = require('express');




const app = express();

//Realize um log toda vez que o cliente se conectar
app.use('/',function(req,res){
    console.log("alguem se conectou");
    
    //Quando o cliente se conectar, analise a query string.
    
    if (Object.keys(req.query).length===0){
        //Se a query string for vazia, responda ao cliente que ele não enviou os dados
        res.send("<p>voce nao enviou os dados</p>");
    }else{
        //Senão, envie para o cliente os dados informados.
        res.send(req.query);
    }        
});
//Peça para o servidor escutar na porta 3500

app.listen(3500, function(){
    console.log("o servidor esta online");
});