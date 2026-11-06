// Ejercicio 9: notificaciones toast
const contenedor = document.createElement("div");
contenedor.id = "toasts";
contenedor.setAttribute("aria-live", "polite");
document.body.appendChild(contenedor);

document.querySelectorAll("[data-tipo]").forEach((boton) => {
    boton.addEventListener("click", () => {
        const toast = document.createElement("div");
        toast.className = "toast " + boton.dataset.tipo;
        toast.textContent = boton.dataset.mensaje;
        contenedor.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 3000);
    });
});
