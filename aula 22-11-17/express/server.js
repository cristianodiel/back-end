const { response } = require('express');
const express = require('express');

const app = express();
app.use(function(request,response){
    console.log("alguem conectou")
    response.send("resposta no navegador")
})
app.listen(3000,function(){
    console.log("Escutando na porta 3000");
    
})


