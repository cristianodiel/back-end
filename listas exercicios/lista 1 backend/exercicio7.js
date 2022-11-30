const express = require('express');

const app = express();
let contador=0;
//Realize um log toda vez que o cliente se conectar
app.use('/',function(req,res){
    console.log("alguem se conectou");
    
    contador++;
    //Ao receber os dados no servidor, escreva uma string bem elaborada dizendo o nome do requerente, a idade e a cidade
    let dados=[req.query.nome,req.query.idade,req.query.cidade
    ]
    console.log(`O nome do requerente e ${req.query.nome}. Sua idade e ${req.query.idade}. E ele mora em ${req.query.cidade}`)  
    //Escreva no console a quantidade de pessoas que já responderam ao formulário
    console.log(`${contador} pessoas ja responderam ao formulario.`)    
});

//Peça para o servidor escutar na porta 3000

app.listen(3000, function(){
    console.log("o servidor esta online http://localhost:3000");
});