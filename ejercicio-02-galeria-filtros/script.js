// Ejercicio 2: galería con filtros por categoría
const botonesFiltro = document.querySelectorAll(".filtro");
const tarjetas = document.querySelectorAll(".galeria figure");

botonesFiltro.forEach((boton) => {
    boton.addEventListener("click", () => {
        botonesFiltro.forEach((b) => b.classList.remove("activo"));
        boton.classList.add("activo");

        const categoria = boton.dataset.filtro;
        tarjetas.forEach((tarjeta) => {
            const coincide = categoria === "todos" || tarjeta.dataset.categoria === categoria;
            tarjeta.classList.toggle("oculto", !coincide);
        });
    });
});
