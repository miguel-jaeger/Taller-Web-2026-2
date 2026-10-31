// Ejercicio 2: Evaluación múltiple (if / else if / else)
// El dato se ingresa desde el formulario y el resultado se muestra en consola.
var formulario = document.querySelector("#form-puntuacion");

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    var puntuacion = Number(document.querySelector("#puntuacion").value);

    if (puntuacion >= 18) {
        console.log("Aprobaste con nota sobresaliente");
    } else if (puntuacion >= 12) {
        console.log("Aprobaste");
    } else {
        console.log("Desaprobaste");
    }
});
