const fruta1 = {
    nome: "maçã",
    cor: "vermelha",
    quantidade: 02,
    madura: false,
    amadurecer: amadurecer,
    defineQuantidade(numero){
        this.quantidade = numero;
    },
    funcao: testando(),
    funcao: funcaoDeFora(),
    mostrar: exibeObjeto,
    amadurecer: amadurecer

}
const fruta2 = {
    nome: "laranja",
    cor: "laranja",
    quantidade: 06,
    madura: true,
    mostrar: exibeObjeto,
    amadurecer: amadurecer
}
const fruta3 = {
    nome: "banana",
    cor: "amarela",
    quantidade: 12,
    madura: true,
    mostrar: exibeObjeto,
    amadurecer: amadurecer
}
const fruta4 = {
    nome: "limão",
    cor: "verde",
    quantidade: 03,
    madura: false,
    mostrar: exibeObjeto,
    amadurecer: amadurecer
}
const fruta5 = {
    nome: "acerola",
    cor: "vermelha",
    quantidade: 04,
    madura: true,
    mostrar: exibeObjeto,
    amadurecer: amadurecer
}
const cesta1 = {
    proprietario: "Heloisa",
    material: "palha de coqueiro",
    frutas:[fruta3, fruta5],
    mostrar: exibeObjeto,
    
}
const cesta2 = {
    proprietario: "Edvaldo",
    material: "palha de trigo",
    frutas:[fruta2, fruta3, fruta4],
    mostrar: exibeObjeto
}
const cesta3 = {
    proprietario: "Eduardo",
    material: "papel",
    frutas:[fruta1, fruta4],
    mostrar: exibeObjeto
}
const cesta4 = {
    proprietario: "Wil",
    material: "ouro",
    frutas:[fruta1, fruta3, fruta5],
    mostrar: exibeObjeto
}
const cesta5 = {
    proprietario: "Fellipe",
    material: "folha",
    frutas:[fruta3],
    mostrar: exibeObjeto
}
const mesa = {
    cestas: [cesta1,cesta2,cesta3,cesta4,cesta5],
    quantidadeCestas:null,
mostrar: exibeObjeto
}
mesa.quantidadeCestas=mesa.cestas.length;
function testando(){
    console.log("testando 1,2,3 ...");
};
function funcaoDeFora(){
    console.log("fazendo a função");
    return ("retorno da função");
};
function exibeObjeto(){
    console.log(this);
};
function amadurecer(){
    if (!this.madura){
        console.log("A fruta vai amadurecer");
        this.madura = true
    } else {
        console.log("A fruta já se encontra madura")
    }
};
/*function total(){

}*/