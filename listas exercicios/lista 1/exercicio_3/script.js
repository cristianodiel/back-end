/*A empresa Hipotheticus paga R$10,00 por hora normal trabalhada, e R$15,00 por hora extra. Faça um algoritmo para calcular e imprimir o salário bruto e o salário líquido de um determinado funcionário. Considere que o salário líquido é igual ao salário bruto descontando-se 10% de impostos.  */
let salarioBruto;
let salarioLiquido;
let horaNormal;
let horaExtra;
horaNormal = prompt("horas normais trabalhadas:");
horaExtra = prompt("horas extras:");
salarioBruto = 10 * horaNormal + 15 * horaExtra;
salarioLiquido = (1-0.1) * salarioBruto; 


console.log("Salario bruto:" + salarioBruto);
console.log("Salario liquido:" + salarioLiquido);

