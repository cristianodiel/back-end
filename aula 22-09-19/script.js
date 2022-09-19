let resultado
function soma() {
    resultado = 20 + 30
    return 
}
soma()
console.log(resultado)

let resultado2
function soma2() {
    resultado2 = 20 + 30
    
}
soma2()
console.log(resultado2)

function soma3(num1, num2) {
    return num1 + num2
};
let numero = soma3(15, 25);
console.log(numero);

function soma4(num1, num2) {
    let multi = num1 * num2;
    let div = num1 / num2;
    return num1 + num2;
};
let resultado3 = soma4(15, 5);
console.log(resultado3);


const vetor = [2, 3, 4, 5, 6, 7, 8];
console.log(vetor);
let outrovetor = vetor;
console.log(outrovetor);
vetor[1] = "banana";
console.log(outrovetor);

let outrovetor2 = vetor.slice();//passa o vetor inteiro
let fatia = vetor.slice(2, 5);//parametros sao o inicio da fatia, o inicio do que sobra. (ultimo nao incluso)
console.log(fatia);


console.log(vetor);
fatia = vetor.splice(2, 4);
console.log(vetor);
console.log(fatia);

//exercicio de algoritmos lista 4 (vetores) ex1
const vet1 = [1, 2, 3, 4, 5];
const vet2 = [5, 4, 3, 2, 1];
const vet3 = [];
for (i = 0; i < vet1.length; i++){
    vet3[i] = vet1[i] + vet2[i];
}
console.table(vet3);

//crie uma funcao que remova os itens nulos ou negativos de um vetore
const vet4 = [15,-10,6,1,0,-4,-9];
const negativos = [];
const zeros = [];
function verifica() {
    for (let i = 0; i < vet4.length; i++){
        if (vet4[i] < 0){
            valorRemovido = vet4.splice(i, 1);
            negativos.push(valorRemovido[0]);
            i--;
        } else if (vet4[i] == 0) {
            let valorRemovido = vet4.splice(i, 1);
            zeros.push(valorRemovido[0]);
            i--;
        }
    }
}

