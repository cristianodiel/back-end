/*A fábrica de refrigerantes Meia-Cola vende seu produto em três formatos: lata de 350 ml, garrafa de 600 ml e garrafa de 2 litros. Se um comerciante compra uma determinada quantidade de cada formato, faça um algoritmo para calcular quantos litros de refrigerante ele comprou.  */
let num350;
let num600;
let num2L;
let qtidadeRefrigerante;




num350 = prompt ("Numero de latas de 350 mL:");
num600 = prompt ("Numero de garrafas de 600 mL:");
num2L = prompt ("Numero de garrafas de 2 L:");
 qtidadeRefrigerante = 0.350 * num350 + 0.600 * num600 + 2. * num2L;


console.log("Quantidade de litros de refrigerante comprados: " + qtidadeRefrigerante);


