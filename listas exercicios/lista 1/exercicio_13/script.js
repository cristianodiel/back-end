/*Faça um algoritmo que receba duas notas, calcule e mostre a média ponderada dessas notas, considerando peso 2 para a primeira nota e peso 3 para a segunda nota.*/
let n1;
let n2;

let resultado;

n1 = prompt ("nota 1: ");
n2 = prompt ("nota 2: ");


resultado = (n1 * 2 + n2 *3)/(2 + 3);

console.log("nota =  " + resultado);


