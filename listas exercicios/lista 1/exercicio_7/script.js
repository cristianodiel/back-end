/*Pedrinho tem um cofrinho com muitas moedas, e deseja saber quantos reais conseguiu poupar. Faça um algoritmo para ler a quantidade de cada tipo de moeda, e imprimir o valor total economizado, em reais. Considere que existam moedas de 1, 5, 10, 25 e 50 centavos, e ainda moedas de 1 real. Não havendo moeda de um tipo, a quantidade respectiva é zero.  */
let num1;
let num5;
let num10;
let num25;
let num50;
let num100;
let total;




num1 = prompt ("Numero de moedas de 1 centavo:");
num5 = prompt ("Numero de moedas de 5 centavos:");
num10 = prompt ("Numero de moedas de 10 centavos:");
num25 = prompt ("Numero de moedas de 25 centavos:");
num50 = prompt ("Numero de moedas de 50 centavos:");
num100 = prompt ("Numero de moedas de 1 real:");

 total = (num1 * 1 + num5 * 5 + num10 * 10 + num25 * 25 + num50 * 50 + num100 * 100)/100;


console.log("Total: R$ " + total);


