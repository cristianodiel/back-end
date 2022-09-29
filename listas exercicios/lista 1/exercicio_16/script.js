/*    16. Faça um algoritmo que receba o peso de uma pessoa, calcule e mostre: 
        a. o novo peso se a pessoa engordar 15% sobre o peso digitado;
        b. o novo peso se a pessoa emagrecer 20% sobre o peso digitado. */
let pesoAtual;
let pesoEngordar;
let pesoEmagrecer;

pesoAtual = prompt ("Peso da pessoa: ");
pesoEngordar = pesoAtual * (1+0.15);
pesoEmagrecer = pesoAtual * (1-0.2);
console.log("Peso engordar: " + pesoEngordar);
console.log("Peso emagrecer: " + pesoEmagrecer);



