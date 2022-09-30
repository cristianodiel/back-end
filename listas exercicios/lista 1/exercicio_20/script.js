/* Faça um algoritmo que calcule e mostre a área de um losango. Sabe-se que: A = (diagonal_maior * diagonal_menor)/2; */
let diagonalMaior;
let diagonalMenor;
let area;


diagonalMaior = parseFloat(prompt ("Diagonal maior: "));
diagonalMenor = parseFloat(prompt ("Diagonal menor: "));

area = diagonalMaior * diagonalMenor / 2;

console.log("Area: " + area);




