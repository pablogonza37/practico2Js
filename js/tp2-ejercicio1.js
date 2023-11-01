const edad = parseInt(prompt('Ingrese la edad:'));

if (edad >= 18){
    alert('Ya puede conducir');
}else if (edad >= 0 && edad <18){
    alert('No puede conducir');
}else {
    alert('Ingrese un numero valido')
}