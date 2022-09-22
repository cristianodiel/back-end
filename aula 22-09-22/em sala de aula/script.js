//conte multiplos de 7 entre 0 a 100
var cont=0;
for (i=0;i<100;i++){
    if (i%7 ==  0){
        cont =cont + 1;
    }
}
console.log(cont);

//exibir valores impares diviseveis por 3 entre 0 a 100
let vetor = [];
for (i=0;i<100;i++){
    if(i%2 != 0){
        if(i%3 == 0){
            vetor.push(i);
        }
    }
}
console.log(vetor);

//valores pares nao divisiveis por 4 de 0 a 100
let vetor2 = [];
for (i=0;i<100;i++){
    if(i%2 == 0){
        if(i%4 != 0){
            vetor2.push(i);
        }
    }
}
console.log(vetor2);