// Ejercicio 6: Captura de datos con window.prompt()
const listaFrutas = [];

for (let i = 0; i < 3; i++) {
    let fruta = prompt("Ingresa la fruta número " + (i + 1) + ":");
    listaFrutas.push(fruta);
}

document.write("<h1>Las frutas ingresadas fueron:</h1>");
document.write("<p>" + listaFrutas.join("- ") + "</p>");
