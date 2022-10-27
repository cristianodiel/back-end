const produto = document.getElementById('produto');
const quantidade = document.getElementById('quantidade');
const preco = document.getElementById('preco');
const calcular = document.getElementById('calcular');
const controleCaixa = document.getElementById('controleCaixa');
calcular.addEventListener('click',obterDados);

function obterDados (){
    let valorFinal = 0;
    valorFinal = quantidade.value*preco.value;
    console.log(valorFinal);
    const elemento = document.createElement('li');
    elemento.innerText =    `Produto: ${produto.value}
                            Quantidade: ${quantidade.value}
                            Preço: R$${parseFloat(preco.value).toFixed(2)}
                            Total do Item: ${valorFinal}`
    controleCaixa.appendChild(elemento);

}