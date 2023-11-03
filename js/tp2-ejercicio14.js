// Ejercicio 14

const cadenaTexto = prompt("Ingrese una cadena de texto");
let cadenaConGuiones = "";
for (i = 0; i < cadenaTexto.length; i++) {
  cadenaConGuiones += cadenaTexto.charAt(i) + "-";
}
document.write(
  `Cadena de texto con guiones:  ${cadenaConGuiones.slice(0, -1)}`
);
