// Ejercicio 6: Generación dinámica de bloques al hacer clic
const boton = document.getElementById("crearBtn");

boton.addEventListener("click", function () {
    const nuevoDiv = document.createElement("div");
    nuevoDiv.textContent = "Elemento dinámico creado";
    nuevoDiv.style.backgroundColor = "lightgreen";
    nuevoDiv.style.padding = "10px";
    nuevoDiv.style.margin = "5px";
    nuevoDiv.style.border = "1px solid black";

    document.body.appendChild(nuevoDiv);
});
