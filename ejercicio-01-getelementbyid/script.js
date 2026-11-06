// Ejercicio 1: Selección por ID y modificación de texto
const botonActualizar = document.getElementById("btnActualizar");

botonActualizar.addEventListener("click", () => {
    const miTitulo = document.getElementById("titulo");
    miTitulo.textContent = "¡Texto Actualizado con JS!";
});
