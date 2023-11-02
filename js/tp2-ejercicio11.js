// Ejercicio 11

const nombres = [];
const edades = [];
for(let i=0; i<=2;i++){
let nombre = nombres.unshift(prompt('Ingrese el nombre:'));
let edad = edades.unshift(parseInt(prompt('Ingrese la edad:')));
}

const indiceMax = edades.indexOf(Math.max(...edades));

const nombreMayor = nombres[indiceMax];

document.write(`La persona de mayor edad es: ${nombreMayor}`);