// Ejercicio 10: Eliminar un elemento hijo específico
const botonEliminar = document.getElementById("btnEliminarSegunda");

botonEliminar.addEventListener("click", function () {
    const contenedor = document.getElementById("galeria");
    const segundaImagen = document.getElementById("img2");

    if (segundaImagen) {
        contenedor.removeChild(segundaImagen);
        botonEliminar.disabled = true;
    }
});
