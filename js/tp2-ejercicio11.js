// Ejercicio 11

const nombres = [];
const edades = [];
for(let i=0; i<=2;i++){
let nombre = nombres.unshift(prompt('Ingrese el nombre '+ (i+1)));
let edad = edades.unshift(parseInt(prompt('Ingrese la edad ' + + (i+1))));
}

const indiceMax = edades.indexOf(Math.max(...edades));

const nombreMayor = nombres[indiceMax];

document.write(`La persona de mayor edad es: ${nombreMayor}`);