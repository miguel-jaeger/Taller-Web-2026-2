// Ejercicio 7: Eliminación directa de elementos del DOM
const boton = document.getElementById("btnEliminar");
const banner = document.getElementById("banner");
const panel = document.querySelector(".panel");
boton.addEventListener("click", function () {
    banner.remove();
    //boton.disabled = true;
    boton.remove();
    panel.textContent = "¡El banner ha sido eliminado!";
});
