const express = require('express')

const app = express()

app.use("/usuarios",function(req, res){
    res.send("<h1> Bem vindo à pagina de usuarios</h1>")
    console.log("alguem conectou")
})
app.use("/dados",function(req, res){
    res.sendStatus(418)
    console.log("alguem conectou")
})
app.listen(3000, function(){
    console.log("o servidor esta online")
})
app.use('/calcular', function(req,res){
    
    if (req.query.nome === "cristiano"){
        res.send("voce é o administrador")
    }
    else{
        res.send("voce nao é o administrador")
    }
    // console.log(req.query)
    // res.send("teste")
    const num1 = parseFloat(req.query.num1)
    const num2 = parseFloat(req.query.num2)
    if(num1>num2){
        res.send(`O numero ${num1} é maior que o numero ${num2}`)
    }else{
        res.send(`O numero ${num2} é maior que o numero ${num1}`)
    }
})
app.use('/imc', function(req,res){
      
    const altura = parseFloat(req.query.altura)
    const peso = parseFloat(req.query.peso)
    let imc = peso/(altura*altura)
    res.send(`O IMC calculado é ${imc}`)
})