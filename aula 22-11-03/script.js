let pessoas = []
const exibe = document.getElementById('exibe')
const cep = document.getElementById('cep')
const mostra = function(){
    fetch("http://10.200.70.241:5555/old")
    .then(function(resposta){
        return resposta.json()
    })
    .then(function(dados){
        pessoas = dados
    })
    
}
let endereco
const busca = function(){
    fetch(`https://viacep.com.br/ws/${cep.value}/json`)
    .then(function(resposta){
        return resposta.json()
    })
    .then(function(dados){
        endereco = dados
        console.log(dados)
    })
    
}
exibe.addEventListener("click",mostra)
