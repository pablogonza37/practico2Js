const texto = prompt("escriba un texto: ").toLowerCase();

let cantidadVocales = 0;
for (i = 0; i < texto.length; i++) {
  if (
    texto.charAt(i) === "a" ||
    texto.charAt(i) === "e" ||
    texto.charAt(i) === "i" ||
    texto.charAt(i) === "o" ||
    texto.charAt(i) === "u"
  ) {
    cantidadVocales++;
  }
}

document.write(`La cantidad de vocales en el texto es: ${cantidadVocales}`);
