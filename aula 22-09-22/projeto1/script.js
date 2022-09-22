//projeto1 tabuada
function tabuada (numero){
    for(let i=0;i<=10;i++){
        let resultado = numero * i;
        console.log(numero + " X " + i + " = " + resultado);
        //console.log(numero + " X " + i + " = " (numero * i));
    }
}
tabuada(7);