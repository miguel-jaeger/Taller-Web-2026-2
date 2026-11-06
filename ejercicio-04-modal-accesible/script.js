// Ejercicio 4: modal accesible
const modal = document.getElementById("miModal");
const abrir = document.getElementById("abrirModal");
const cerrar = modal.querySelector(".cerrar");

function abrirModal() {
    modal.classList.add("abierto");
    cerrar.focus();
}

function cerrarModal() {
    modal.classList.remove("abierto");
    abrir.focus();
}

abrir.addEventListener("click", abrirModal);
cerrar.addEventListener("click", cerrarModal);

modal.addEventListener("click", (evento) => {
    if (evento.target === modal) {
        cerrarModal();
    }
});

document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape" && modal.classList.contains("abierto")) {
        cerrarModal();
    }
});
