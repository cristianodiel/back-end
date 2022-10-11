const atendimentos = []
let saldo = 0
let ativo = true

while(ativo){
let produto = {
    nome: "",
    preco: 0,
    quantidade:0,
    valorFinal:0
}
let opcao = parseInt(prompt("Bem vindo à cantina da discordia.\n"+
                    "Digite a opção desejada.\n"+
                    "1 - Fazer um pedido\n"+
                    "2 - Ver promoções\n"+
                    "3 - Visualizar itens vendidos\n"+
                    "4 - Consultar saldo do caixa\n"+
                    "5 - Encerrar aplicação"))
switch (opcao){
    case 1: 
        let escolha = parseInt(prompt("Digite o numero do pedido\n"+
                                    "1 - Cachorro Quente"))
        switch (escolha){
            case 1 : 
                produto.nome = "Cachorro Quente"
                produto.quantidade = parseInt(prompt("Digite a quantidade desejada."))
                if (produto.quantidade<2){
                    produto.preco = 8
                }else {
                    produto.preco = 7.5
                }
                produto.valorFinal = produto.quantidade * produto.preco
            break

            default:
            break
        }
        atendimentos.push(produto)
    break
    case 2: 
    alert ("Menu de promoções imperdíveis\n"+
            "1 cachorro quente por 8, 2 por 15")
    break
    case 3:
        console.table(atendimentos)
    break
    case 4:
        for (let i =0; i<atendimentos.length; i++){
            saldo = saldo+ atendimentos[i].valorFinal
        }
        console.log(saldo)
    break
    default: 
    ativo = false
}
}