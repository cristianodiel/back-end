/*2 – Adicione itens para vender nesta cantina!
Crie alguns itens que poderão ser vendidos. Cada um com uma promoção imperdível.
Estes novos produtos deverão também estar presentes no menu interativo
Lembre-se, cada item vendido deverá ir para uma lista.

*/
const pedidos = {
    cachorroQuente: [],
    refrigerante: [],
    chicletinho: []
};
let aux;
let valorPedido;
let controleDeCaixa=0;
//const listaPedidos = [];
let escolha;

do{
    escolha=parseInt(prompt("Menu:\n1 - Cachorro quente\n    1 por R$ 8,00\n    2 por R$ 15,00\n2 - Refrigerante lata\n    1 por R$ 6,00\n    2 por R$ 10,00\n3 - Chicletinho\n    1 por R$ 1,50\n    2 por R$ 2,00\n"));
    switch (escolha){
        case 1:
            aux=parseInt(prompt("Quantos cachorros quentes deseja comprar?"));
            pedidos.cachorroQuente.push(aux);
            if (aux%2==0){
                valorPedido = (aux/2)*15;
            }else{
                valorPedido = (parseInt(aux/2)*15) + 8;
            }
            break;
        case 2:
            aux=parseInt(prompt("Quantos refrigerantes deseja comprar?"));
            pedidos.refrigerante.push(aux);
            if (aux%2==0){
                valorPedido = (aux/2)*10;
            }else{
                valorPedido = (parseInt(aux/2)*10) + 6;
            }
            break;
        case 3:
            aux=parseInt(prompt("Quantos chicletinhos deseja comprar?"));
            pedidos.chicletinho.push(aux);
            if (aux%2==0){
                valorPedido = (aux/2)*2;
            }else{
                valorPedido = (parseInt(aux/2)*2) + 1.5;
            }
            break;
        default:
        {
            alert("Escolha Invalida");
        }
    }
    
    controleDeCaixa = controleDeCaixa + valorPedido;

}while(confirm("Deseja fazer um novo pedido?"));

console.log(pedidos);
console.log("controle de caixa: R$" + controleDeCaixa);