// Ejercicio 7: buscador en vivo
const busqueda = document.getElementById("busqueda");
const filas = Array.from(document.querySelectorAll("#tablaEstudiantes tbody tr"));
const sinResultados = document.getElementById("sinResultados");

busqueda.addEventListener("input", () => {
    const termino = busqueda.value.trim().toLowerCase();
    let visibles = 0;

    filas.forEach((fila) => {
        const coincide = fila.textContent.toLowerCase().includes(termino);
        fila.style.display = coincide ? "" : "none";
        if (coincide) {
            visibles += 1;
        }
    });

    sinResultados.style.display = visibles === 0 ? "block" : "none";
});
