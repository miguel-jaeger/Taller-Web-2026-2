// Ejercicio 7: Eliminación directa de elementos del DOM
const boton = document.getElementById("btnEliminar");
const banner = document.getElementById("banner");

boton.addEventListener("click", function () {
    banner.remove();
    boton.disabled = true;
});
