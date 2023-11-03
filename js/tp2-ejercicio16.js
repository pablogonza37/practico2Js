// Ejercicio 16

let cadenaInvertida = '';
const cadenaTexto = prompt('Ingrese una cadena de texto');

for (let indice = cadenaTexto.length - 1; indice >= 0; indice--) { 
    cadenaInvertida += cadenaTexto[indice]; 
}

document.write(`${cadenaInvertida}`);