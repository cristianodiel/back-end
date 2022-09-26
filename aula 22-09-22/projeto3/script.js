//lista de compras
//crie um algoritmo que contenha uma função que receba como parametro o nome de um filme e o ano de lançamento. Ao final de cada inserção, exiba o conteudo da lista no console.
const filmes=[];
const filmesExibidos=[];
function adicionar(nomeFilme,anoLancamento){
    let filme = {};
    filme.titulo = nomeFilme;
    filme.ano = anoLancamento;
    
    filmes.push(filme);
    console.table(filmes);
}
adicionar("a casa do terror", 2004);
adicionar("filme 2", 2001);
/*
function exibir(indiceFilme){
    if(indiceFilme==filmes.index){
    filmesExibidos.push([indiceFilme]);
    filmesExibidos.titulo = Filme.nomeFilme;
    filmesExibidos.ano = Filme.anoLancamento;
    }
}
exibir('teste');
console.table(filmesExibidos);
*/
