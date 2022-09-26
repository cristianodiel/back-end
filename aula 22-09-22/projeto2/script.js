//lista de compras
//crie um algoritmo que contenha uma função que receba como parametro um item que sera adicionado à lista de compras e exiba no console a lista inteira.
const vetor=[];
function lista(item){
    //let item = prompt("informe o novo item da lista:");
    vetor.push(item);
    console.log(vetor);
}
lista("tomate");
lista("cebola");
lista("batata");

function listarUmItem(indice){
    console.log(vetor[indice])
}

listarUmItem(1);