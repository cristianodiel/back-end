/*Num dia de sol, você deseja medir a altura de um prédio, porém, a trena não é suficientemente longa. Assumindo que seja possível medir sua sombra e a do prédio no chão, e que você lembre da sua altura, faça um algoritmo para ler os dados necessários e calcular a altura do prédio. */
let x1;
let x2;
let y1;
let y2;

x1 = prompt ("Sombra da pessoa:");
x2 = prompt ("Sombra do predio:");
y1 = prompt ("Altura da pessoa:");


 y2 = y1 * x2 / x1;


console.log("Altura do predio " + y2);


