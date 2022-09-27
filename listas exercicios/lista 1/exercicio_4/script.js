/*A granja Frangotech possui um controle automatizado de cada frango da sua produção. No pé direito do frango há um anel com um chip de identificação; no pé esquerdo são dois anéis para indicar o tipo de alimento que ele deve consumir. Sabendo que o anel com chip custa R$4,00 e o anel de alimento custa R$3,50, faça um algoritmo para calcular o gasto total da granja para marcar todos os seus frangos.  */
let numFrangos;
let anelIdentificacao;
let anelAlimento;
let custo;


anelIdentificacao = 4.00;
anelAlimento = 3.50;
numFrangos = prompt ("Numero de Frangos:");
custo = numFrangos * (1 * anelIdentificacao + 2 * anelAlimento);
 


console.log("Custo total:" + custo);


