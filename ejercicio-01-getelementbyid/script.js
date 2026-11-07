// Ejercicio 1: Selección por ID y modificación de texto
const botonActualizar = document.getElementById("btnActualizar");

botonActualizar.addEventListener("click", () => {
    const miTitulo = document.getElementById("titulo");
      const parrafos = document.querySelectorAll(".texto");
    miTitulo.textContent = "¡Texto Actualizado con JS!";

   alert("¡El título ha sido actualizado!");
   alert("Cantidad de párrafos: " + parrafos.length);

});
