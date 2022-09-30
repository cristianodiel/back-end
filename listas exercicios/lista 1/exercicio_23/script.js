/*     23. Faça um algoritmo que receba o ano de nascimento de uma pessoa e o ano atual, calcule e mostre:
        a. a idade dessa pessoa em anos;
        b. a idade dessa pessoa em meses; 
        c. a idade dessa pessoa em dias
        d. a idade dessa pessoa em semanas.*/
let anoNascimento;
let anoAtual;
let idadeAnos;
let idadeMeses;
let idadeDias;
let idadeSemanas;

anoNascimento = parseInt (prompt ("Ano de nascimento"));
anoAtual = parseInt (prompt ("Ano de nascimento"));
idadeAnos = anoAtual - anoNascimento;
idadeMeses = idadeAnos * 12;
idadeDias = idadeAnos * 365;
idadeSemanas = parseInt (idadeDias / 7);


console.log("Idade: " + idadeAnos + "anos.");
console.log("Idade: " + idadeMeses + "meses.");
console.log("Idade: " + idadeDias + "dias.");
console.log("Idade: " + idadeSemanas + "semanas.");






