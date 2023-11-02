// ejercico 4

let suma = 0;
do{
    let numero = parseInt(prompt('Ingrese un numero:')); 
    if (!isNaN(numero)){         
    suma += numero;
    }else {
        alert("Entrada no válida. Por favor, ingresa un número.");  
    }
}while(confirm('Desea seguir digitando numeros?'));

document.write("La suma total de los números introducidos es: " + suma);
