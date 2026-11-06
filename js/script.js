// Proyecto final · Estudio Verde
// Funcionalidades: menú responsivo, tema oscuro, filtros, modal, validación y toasts.

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const temaBtn = document.getElementById("temaBtn");
const CLAVE_TEMA = "temaProyecto";

// --- Menú responsivo -------------------------------------------------------
if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
        const abierto = menu.classList.toggle("abierto");
        menuBtn.setAttribute("aria-expanded", String(abierto));
    });

    menu.querySelectorAll("a").forEach((enlace) => {
        enlace.addEventListener("click", () => {
            menu.classList.remove("abierto");
            menuBtn.setAttribute("aria-expanded", "false");
        });
    });
}

// --- Enlace activo ---------------------------------------------------------
const paginaActual = document.body.dataset.pagina;
document.querySelectorAll(".menu a").forEach((enlace) => {
    enlace.classList.toggle("activo", enlace.dataset.pagina === paginaActual);
});

// --- Tema oscuro persistente ----------------------------------------------
function aplicarTema(oscuro) {
    document.body.classList.toggle("tema-oscuro", oscuro);
    if (temaBtn) {
        temaBtn.textContent = oscuro ? "Modo claro" : "Modo oscuro";
        temaBtn.setAttribute("aria-pressed", String(oscuro));
    }
}

let temaGuardado = null;
try {
    temaGuardado = localStorage.getItem(CLAVE_TEMA);
} catch (error) {
    console.warn("No se pudo leer la preferencia de tema:", error.message);
}

aplicarTema(temaGuardado === "oscuro");

if (temaBtn) {
    temaBtn.addEventListener("click", () => {
        const oscuro = !document.body.classList.contains("tema-oscuro");
        aplicarTema(oscuro);
        try {
            localStorage.setItem(CLAVE_TEMA, oscuro ? "oscuro" : "claro");
        } catch (error) {
            console.warn("No se pudo guardar la preferencia de tema:", error.message);
        }
    });
}

// --- Galería con filtros ---------------------------------------------------
const filtros = document.querySelectorAll(".filtro");
const figuras = document.querySelectorAll(".galeria figure");

filtros.forEach((filtro) => {
    filtro.addEventListener("click", () => {
        filtros.forEach((boton) => boton.classList.remove("activo"));
        filtro.classList.add("activo");

        const categoria = filtro.dataset.filtro;
        figuras.forEach((figura) => {
            const coincide = categoria === "todos" || figura.dataset.categoria === categoria;
            figura.classList.toggle("oculto", !coincide);
        });
    });
});

// --- Ventanas modales ------------------------------------------------------
let modalActivo = null;
let focoAnterior = null;

function abrirModal(modal) {
    modalActivo = modal;
    focoAnterior = document.activeElement;
    modal.classList.add("abierto");
    const cerrar = modal.querySelector(".cerrar");
    if (cerrar) {
        cerrar.focus();
    }
}

function cerrarModal() {
    if (!modalActivo) {
        return;
    }
    modalActivo.classList.remove("abierto");
    modalActivo = null;
    if (focoAnterior) {
        focoAnterior.focus();
    }
}

document.querySelectorAll("[data-abrir-modal]").forEach((boton) => {
    boton.addEventListener("click", () => {
        const modal = document.getElementById(boton.dataset.abrirModal);
        if (modal) {
            abrirModal(modal);
        }
    });
});

document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (evento) => {
        if (evento.target === modal) {
            cerrarModal();
        }
    });

    const cerrar = modal.querySelector(".cerrar");
    if (cerrar) {
        cerrar.addEventListener("click", cerrarModal);
    }
});

document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
        cerrarModal();
    }
});

// --- Notificaciones --------------------------------------------------------
function mostrarToast(mensaje, tipo) {
    let contenedor = document.getElementById("toasts");
    if (!contenedor) {
        contenedor = document.createElement("div");
        contenedor.id = "toasts";
        contenedor.setAttribute("aria-live", "polite");
        document.body.appendChild(contenedor);
    }

    const toast = document.createElement("div");
    toast.className = "toast" + (tipo === "error" ? " error" : "");
    toast.textContent = mensaje;
    contenedor.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3500);
}

// --- Validación del formulario --------------------------------------------
const formulario = document.getElementById("formContacto");

if (formulario) {
    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");
    const mensaje = document.getElementById("mensaje");
    const estado = document.getElementById("estadoFormulario");

    function marcar(input, idError, textoError) {
        document.getElementById(idError).textContent = textoError;
        input.classList.toggle("invalido", Boolean(textoError));
        return textoError === "";
    }

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();
        estado.textContent = "";

        const nombreValido = marcar(
            nombre,
            "errorNombre",
            nombre.value.trim().length >= 3 ? "" : "Ingresa al menos 3 caracteres."
        );
        const correoValido = marcar(
            correo,
            "errorCorreo",
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value.trim()) ? "" : "Ingresa un correo válido."
        );
        const mensajeValido = marcar(
            mensaje,
            "errorMensaje",
            mensaje.value.trim().length >= 10 ? "" : "El mensaje debe tener al menos 10 caracteres."
        );

        if (!nombreValido || !correoValido || !mensajeValido) {
            estado.textContent = "Revisa los campos marcados.";
            estado.style.color = "var(--peligro)";
            return;
        }

        estado.textContent = "Mensaje validado correctamente. ¡Gracias!";
        estado.style.color = "var(--exito)";
        mostrarToast("Mensaje enviado correctamente (demostración).");
        formulario.reset();
    });
}

// --- Año del pie de página ------------------------------------------------
document.querySelectorAll("[data-anio]").forEach((elemento) => {
    elemento.textContent = new Date().getFullYear();
});
