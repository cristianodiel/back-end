/* Faça um algoritmo que receba o valor do salário mínimo e o valor do salário de um funcionário, calcule e mostre a quantidade de salários mínimos que ganha esse funcionário. */
let salarioMinimo;
let salario;
let qtidade;


salarioMinimo = prompt ("Salario Minimo: ");
salario = prompt ("Salario do funcionario: ");

qtidade = parseFloat (salario / salarioMinimo);

console.log("Quantidade de salarios minimos: " + qtidade);




