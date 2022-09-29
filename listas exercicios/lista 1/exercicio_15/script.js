/*Um funcionário recebe um salário fixo mais 4% de comissão sobre as vendas. Faça um algoritmo que receba o salário fixo de um funcionário e o valor de suas vendas, calcule e mostre a comissão e o salário final do funcionário. */
let salarioFixo;
let vendas;
let comissao;
let salarioFinal;

salarioFixo = prompt ("Salario fixo: ");
vendas = prompt ("Valor de vendas efetuadas pelo funcionario: ");
comissao = 0.04 * vendas;
salarioFinal = salarioFixo + comissao;


console.log("comissao: " + comissao);
console.log("salario total do funcionario: " + salarioFinal);


