/*4 – Os seus produtos  (coquinha, sorvete seco, paçoquinha) também tem um custo! Nada na vida é de graça. Adicione estes custos também ao contador de despesas, após cada venda.
*/
const pedidos = [];



let opcao;
let escolha;
let ativo = true;
let saldo=0;
let despesas=0;



while(ativo){
    let opcao = parseInt(prompt("Digite a opcao desejada\n"+
                            "1 - Fazer um pedido\n"+
                            "2 - Ver promoções\n"+
                            "3 - Visualizar itens vendidos\n"+
                            "4 - Consultar saldo do caixa\n"+
                            "5 - Encerrar aplicação\n"
                            ));

    switch (opcao){
        case 1:
            const produto = {
                nome: "",
                custo: 0,
                preco: 0,
                quantidade:0,
                valorFinal:0
            }
            escolha=parseInt(prompt("Escolha o que quer comprar:\n1 - cachorro quente\n2 - refrigerante lata\n3 - chicletinho"));
            switch (escolha){
                case 1:
                    produto.nome = "cachorro quente"
                    produto.quantidade=parseInt(prompt("Quantos cachorros quentes deseja comprar?"));
                    
                    if (produto.quantidade%2==0){
                        produto.valorFinal = (produto.quantidade/2)*15;
                    }else{
                        produto.valorFinal = (parseInt(produto.quantidade/2)*15) + 8;
                        
                    }
                    produto.preco = produto.valorFinal/produto.quantidade;
                    produto.custo = 4.5;
                    despesas = despesas + produto.quantidade * produto.custo;
                                        
                    break;
                case 2:
                    produto.nome = "refrigerante"
                    produto.quantidade=parseInt(prompt("Quantos refrigerantes deseja comprar?"));
                    if (produto.quantidade%2==0){
                        produto.valorFinal = (produto.quantidade/2)*10;
                    }else{
                        produto.valorFinal = (parseInt(produto.quantidade/2)*10) + 6;
                    }
                    produto.preco = produto.valorFinal/produto.quantidade;
                    produto.custo = 2;
                    despesas = despesas + produto.quantidade * produto.custo;
                                        
                    break;
                case 3:
                    produto.nome = "chicletinho"
                    produto.quantidade=parseInt(prompt("Quantos chicletinhos deseja comprar?"));
                    if (produto.quantidade%2==0){
                        produto.valorFinal = (produto.quantidade/2)*2;
                    }else{
                        produto.valorFinal = (parseInt(produto.quantidade/2)*2) + 1,5;
                        
                    }
                    produto.preco = produto.valorFinal/produto.quantidade;
                    produto.custo = 0.5;
                    despesas = despesas + produto.quantidade * produto.custo;
                                        
                    break;
                default:
                {
                    alert("Escolha Invalida");
                }
                break;
                
            }
            pedidos.push(produto);
        break
        case 2:
            alert("Menu:\n1 - Cachorro quente\n    1 por R$ 8,00\n    2 por R$ 15,00\n2 - Refrigerante lata\n    1 por R$ 6,00\n    2 por R$ 10,00\n3 - Chicletinho\n    1 por R$ 1,50\n    2 por R$ 2,00\n");

        break
        case 3:
            console.table(pedidos);

        break
        case 4:
            saldo = 0;
            for (let j =0; j<pedidos.length; j++){
                saldo = saldo + pedidos[j].valorFinal - pedidos[j].custo * pedidos[j].quantidade;
            }
            console.log(saldo)

        break
        default:
        ativo = false

    }
}
