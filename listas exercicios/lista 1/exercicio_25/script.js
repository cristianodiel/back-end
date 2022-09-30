/*   Faça um algoritmo que receba o valor dos catetos de um triângulo, calcule e mostre o valor da hipotenusa.  */
let cateto1;
let cateto2;
let hipotenusa;

cateto1 = parseFloat(prompt("Cateto1: "));
cateto2 = parseFloat(prompt("Cateto2: "));
hipotenusa = Math.pow((Math.pow(cateto1,2) + Math.pow(cateto2,2)),0.5)


console.log("Hipotenusa: " + hipotenusa);







