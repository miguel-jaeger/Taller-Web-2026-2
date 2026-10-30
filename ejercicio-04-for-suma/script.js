// Ejercicio 4: Acumulación iterativa con un bucle for
// El límite se ingresa desde el formulario y el resultado se muestra en consola.
var formulario = document.querySelector("#form-suma");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    var limite = Number(document.querySelector("#limite").value);
    var sumaTotal = 0;

    for (var i = 1; i <= limite; i++) {
        sumaTotal = sumaTotal + i;
        console.log("Vuelta " + i + ": la suma actual es " + sumaTotal);
    }

    console.log("El resultado final de la suma es: " + sumaTotal);
});
