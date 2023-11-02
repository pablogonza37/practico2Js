// Ejercicio 8

const numero = parseInt(prompt('Ingrese un numero del 1 al 50'));
if (numero >= 1 && numero <= 50){
for(let i=1; i <= numero; i++){
    for(let j=1; j<=i; j++){
    document.write(`${i}`);
    }
    document.write(`</br>`);
}
}else {
    alert('Por favor, ingrese un numero del 1 al 50');
}