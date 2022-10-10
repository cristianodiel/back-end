function soma(a,b){
    resultado = parseFloat(a)+parseFloat(b);
    return(resultado);

}
function subtracao(a,b){
    if(a>b){
        return a-b;
    }else
    return b-a;
    

}
function multiplicacao(a,b){
    return a*b;
}
function divisao(a,b){
    return a/b;
}


function operacoes(a,b,cb){
    return cb(a,b);
}


function potencia(a,b){
    return a**b;
}
function porcentagem(a,b){
    return a*b/100 + "%"
}



console.log("soma: " + operacoes(4,2,soma));
console.log("subtracao: " + operacoes(4,2,subtracao));
console.log("multiplicacao: " + operacoes(4,2,multiplicacao));
console.log("divisao: " + operacoes(4,2,divisao));
console.log("potencia: " + operacoes(4,2,potencia));
console.log("porcentagem: " + operacoes(4,2,porcentagem));