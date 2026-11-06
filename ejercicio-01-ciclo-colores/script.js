// Ejercicio 1: ciclo de colores con arreglo y operador módulo
const boton = document.getElementById("cambiarColor");
const cuadro = document.querySelector(".cuadro");
const colores = ["lightblue", "lightcoral", "lightgreen"];
let indice = 0;

function cambiarColor() {
    cuadro.style.backgroundColor = colores[indice];
    indice = (indice + 1) % colores.length;
}

boton.addEventListener("click", cambiarColor);
