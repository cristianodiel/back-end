let vetor = ["banana","milho","cerveja"]

function mostraItem(item){
    console.log("Meu item é "+item)
    }
vetor.forEach(mostraItem);
//
const vet = [1,2,3,4,5,6,7,8,9];
for (i=0;i<vet.length;i++){
    console.log("O dobro de " + vet[i] + " é: "+ 2 * vet[i]);
}

function dobro(item){
    console.log("O dobro de " + item + " é: " + 2 * item);
}

vet.forEach(dobro);

//

let vetor1 = [1,2,3,4,5,6,7,8,9];

function duplicar(item){
    return item*2;
}
let outroVetor = vetor1.map(duplicar);
console.log(vetor1);
console.log(outroVetor);