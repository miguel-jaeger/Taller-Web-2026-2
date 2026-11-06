// Ejercicio 9: Agregar una lista de elementos dinámicamente
const cantidad = Number(prompt("¿Cuántos elementos deseas agregar?"));
const lista = document.getElementById("listaDinamica");

for (let i = 1; i <= cantidad; i++) {
    const elemento = document.createElement("li");
    elemento.textContent = "Elemento " + i;
    lista.appendChild(elemento);
}
