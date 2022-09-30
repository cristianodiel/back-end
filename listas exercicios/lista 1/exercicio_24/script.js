/*    João recebeu seu salário de R$ 1200,00 e precisa pagar duas contas (C1=R$ 200,00 e C2=R$120,00) que estão atrasadas. Como as contas estão atrasadas, João terá de pagar multa de 2% sobre cada conta. Faça um algoritmo que calcule e mostre quanto restará do salário do João */
let salarioBruto;
let c1;
let c2;
let salarioFinal;

salarioBruto = 1200;
c1 = 200;
c2 = 120;
salarioFinal = salarioBruto - c1 * (1 + 0.02) - c2 * (1 + 0.02);



console.log("Salario restante R$ " + salarioFinal);







