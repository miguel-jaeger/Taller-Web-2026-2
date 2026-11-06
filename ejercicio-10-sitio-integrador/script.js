// Ejercicio 10: mini sitio integrador
const botonMenu = document.querySelector(".menu-btn");
const menu = document.getElementById("menuIntegrador");
const botonTema = document.getElementById("tema");
const modal = document.getElementById("modalIntegrador");
const abrirModal = document.getElementById("abrirModal");
const cerrarModal = modal.querySelector(".cerrar");

// Menú responsivo
botonMenu.addEventListener("click", () => {
    const abierto = menu.classList.toggle("abierto");
    botonMenu.setAttribute("aria-expanded", String(abierto));
});

menu.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
        menu.classList.remove("abierto");
        botonMenu.setAttribute("aria-expanded", "false");
    });
});

// Tema oscuro
botonTema.addEventListener("click", () => {
    const oscuro = document.body.classList.toggle("tema-oscuro");
    botonTema.textContent = oscuro ? "Modo claro" : "Modo oscuro";
});

// Galería con filtros
const filtros = document.querySelectorAll(".filtro");
const figuras = document.querySelectorAll(".galeria figure");

filtros.forEach((filtro) => {
    filtro.addEventListener("click", () => {
        filtros.forEach((f) => f.classList.remove("activo"));
        filtro.classList.add("activo");
        const categoria = filtro.dataset.filtro;
        figuras.forEach((figura) => {
            const coincide = categoria === "todos" || figura.dataset.categoria === categoria;
            figura.classList.toggle("oculto", !coincide);
        });
    });
});

// Modal
function mostrarModal() {
    modal.classList.add("abierto");
    cerrarModal.focus();
}

function ocultarModal() {
    modal.classList.remove("abierto");
    abrirModal.focus();
}

abrirModal.addEventListener("click", mostrarModal);
cerrarModal.addEventListener("click", ocultarModal);
modal.addEventListener("click", (evento) => {
    if (evento.target === modal) {
        ocultarModal();
    }
});
document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
        ocultarModal();
    }
});

// Validación de formulario
const formulario = document.getElementById("formContacto");
const estado = document.getElementById("estadoFormulario");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre = document.getElementById("nombreContacto").value.trim();
    const correo = document.getElementById("correoContacto").value.trim();
    const mensaje = document.getElementById("mensajeContacto").value.trim();
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

    if (nombre.length < 3) {
        estado.textContent = "Ingresa un nombre de al menos 3 caracteres.";
        estado.style.color = "#b91c1c";
        return;
    }

    if (!correoValido) {
        estado.textContent = "Ingresa un correo válido.";
        estado.style.color = "#b91c1c";
        return;
    }

    if (mensaje.length < 10) {
        estado.textContent = "El mensaje debe tener al menos 10 caracteres.";
        estado.style.color = "#b91c1c";
        return;
    }

    estado.textContent = "Mensaje validado correctamente. ¡Gracias!";
    estado.style.color = "#047857";
    formulario.reset();
});
