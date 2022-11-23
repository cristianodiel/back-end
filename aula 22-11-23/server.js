const express = require ('express')

const app = express()

const frase = "A minha frase é das boas."

//const vetor = ["banana", "iogurte", "granola", "canela"]

const vetor = [{nome:"esquisio", idade: 30},{nome:"virgulino", idade: 40}]

const dados = require ('./dados.json')
const dadosIdosos = dados.filter(function(dado){
    return dado.idade>60
})
const dadosAdultos = dados.filter(function(dado){
    return (dado.idade<=60 && dado.idade>=18)
})
const dadosMenores = dados.filter((dado)=>{
    return dado.idade<18
})

//app.use('/', function(req, res){
//    res.send(frase)
//})

// app.use('/', function(req,res){
//     res.send(vetor)
// })

// app.get('/idosos', function(req,res){
//     res.send(dadosIdosos)
// })
// app.get('/adultos', function(req,res){
    
//     res.send(dadosAdultos)
// })
// app.get('/menores', function(req,res){
//     res.send(dadosMenores)
// })
app.get('/:algo', function(req,res){
        res.send(`voce acessou a pagina de ${req.params.algo}`)
    })

app.listen(3000, function(){
    console.log("Servidor online")
})

