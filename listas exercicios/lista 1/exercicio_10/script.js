/*Calcule o volume de uma caixa d'água cilíndrica.*/
let volume;
let altura;
let raio;
let pi;

pi = 3.14159;
altura = prompt ("Altura da lista: ");
raio = prompt ("Raio da base da lista: ");
volume = altura * pi * Math.pow(raio,2);

console.log("Volume da caixa de agua com estas dimensoes: " + volume);


