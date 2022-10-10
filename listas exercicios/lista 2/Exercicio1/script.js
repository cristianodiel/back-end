/*1 – Você é o dono da cantina e deseja iniciar a venda de cachorro quentes.
Um cachorro quente custa R$8,00. Se comprar dois, fica R$15,00 (oportunidade de ouro).
Faça um algoritmo que receba um pedido nesta cantina;
Você deve adicionar uma lista de produtos que já foram vendidos;
Você deve criar um controle de caixa, para ver quanto entrou de dinheiro;
*/
const pedidos = [];
let numCachorroQuente;
let controleDeCaixa=0;
const listaPedidos = [];

do{
    numCachorroQuente=prompt("Quantos cachorros quentes deseja comprar?");
    listaPedidos.push(numCachorroQuente);
    if (numCachorroQuente%2==0){
        valorPedido = (numCachorroQuente/2)*15;
    }else{
        valorPedido = (parseInt(numCachorroQuente/2)*15) + 8;
    }
    controleDeCaixa = controleDeCaixa + valorPedido;

}while(confirm("Deseja fazer um novo pedido?"));

console.log(listaPedidos);
console.log("controle de caixa: R$" + controleDeCaixa);