// Ejercicio 17

const texto = prompt("ingrese un texto").toLowerCase();
let indice = 0;
while (
  texto.charAt(indice) !== "a" &&
  texto.charAt(indice) !== "e" &&
  texto.charAt(indice) !== "i" &&
  texto.charAt(indice) !== "o" &&
  texto.charAt(indice) !== "u"
) {
  indice++;
}

document.write(`la vocal ${texto.charAt(indice)} está en la posición ${indice}`);
