/* Faça um algoritmo que calcule e mostre a área de um trapézio. Sabe-se que: A = (base maior + base menor)* altura)/2 ;  */
let baseMaior;
let baseMenor;
let altura;
let area;


baseMaior = parseFloat(prompt ("Base maior: "));
baseMenor = parseFloat(prompt ("Base menor: "));
altura = parseFloat(prompt ("Altura: "));
area = ((baseMaior + baseMenor) * altura) / 2;

console.log("Area: " + area);




