/*Um tonel de refresco é feito com 8 partes de água mineral e 2 partes de suco de maracujá. Faça um algoritmo para calcular quantos litros de água e de suco são necessários para se fazer X litros de refresco (informados pelo usuário).*/
let qtdadeAgua;
let qtdadeSuco;
let qtdadeRefresco;


qtdadeRefresco = prompt ("Quantidade em litros de refresco desejado:");
qtdadeAgua = 0.8 * qtdadeRefresco;
qtdadeSuco = 0.2 * qtdadeRefresco;

console.log("Para essa quantidade de refresco, serao necessarios  " + qtdadeAgua + " litros de agua, e " + qtdadeSuco + " litros de suco de maracuja.");


