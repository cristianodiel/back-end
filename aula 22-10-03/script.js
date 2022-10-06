
let pessoa ={
    nome: "",
    peso: 0,
    altura: 0,
    imc: 0
}

//const tam = prompt ("Informe o numero de pessoas: ")

const pessoas = []

//for (i=0;i<tam; i++){
    do{
    const nome = prompt("Informe o nome:");
    const peso = parseInt(prompt("Informe o peso (em kg):"));
    const altura = (prompt("Informe a altura (em cm)")/100);
    pessoa ={
        nome: nome,
        peso: peso,
        altura: altura,
        imc: (parseFloat(peso / (altura * altura))).toFixed(2)
    }
    pessoas.push(pessoa);
    if (pessoa.imc<18.5){
        alert("A pessoa está abaixo do peso normal.")
    }else if (pessoa.imc<25){
        alert("Peso normal.")
    }else if (pessoa.imc<30){
        alert("Sobrepeso.")
    }else if (pessoa.imc<40){
        alert("Obesidade.")
    }else {
        alert("Obesidade grave.")
    }
    novaPessoa = confirm("Deseja informar uma nova pessoa?");
}while (novaPessoa);
console.table(pessoas);