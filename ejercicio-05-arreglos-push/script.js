// Ejercicio 5: Manipulación dinámica de arreglos (push y length)
// La fruta se ingresa desde el formulario y el resultado se muestra en consola.
var frutas = ["manzana", "banana", "naranja"];
var formulario = document.querySelector("#form-fruta");
var campoFruta = document.querySelector("#fruta");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    frutas.push(campoFruta.value.trim());

    console.log("Total de frutas: " + frutas.length);
    console.log("Elemento en índice 1: " + frutas[1]);
    console.log("Frutas registradas: " + frutas.join(", "));

    campoFruta.value = "";
    campoFruta.focus();
});
