function alertar(){
    console.log("o botao foi clicado");
    alert('clicou em mim');
}
function alertarH1(){
    console.log("o titulo foi clicado");
    alert('clicou no título');
}
let contador=0;
function acionar(){
    console.log(`O evento foi acionado ${contador} vezes`);
    //console.log("o evento foi adicionado " + contador + "vezes")
    contador ++;
}
const texto = document.getElementById('texto');

texto.addEventListener('click', acionar);
//dois parametros. o primeiro é o evento, o segundo a funcao a ser chamada

function imprimeValor(){
    console.log(texto.value);
}
texto.addEventListener('blur', imprimeValor);

function clicou(){
    console.log("o botao 2 foi clicado");
}
let botao2 = document.getElementById("botao2");

botao2.addEventListener('click',clicou);