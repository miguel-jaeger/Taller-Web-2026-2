// Ejercicio 1: Evaluación condicional básica (if / else)
// El dato se ingresa desde el formulario y el resultado se muestra en consola.
var formulario = document.querySelector("#form-edad");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    var edad = Number(document.querySelector("#edad").value);
     var edad1 = Number(document.querySelector("#edad1").value);

     alert(edad+edad1);
    if (edad >= 18) {
        console.log("Eres mayor de edad");
    } else {
        console.log("Eres menor de edad");
    }
});
