// Ejercicio 1: modo oscuro persistente
const botonTema = document.getElementById("themeToggle");
const CLAVE = "temaSem16";

function aplicarTema(oscuro) {
    document.body.classList.toggle("tema-oscuro", oscuro);
    botonTema.textContent = oscuro ? "Desactivar modo oscuro" : "Activar modo oscuro";
    botonTema.setAttribute("aria-pressed", String(oscuro));
}

let temaGuardado = null;
try {
    temaGuardado = localStorage.getItem(CLAVE);
} catch (error) {
    console.warn("No se pudo leer localStorage:", error.message);
}

aplicarTema(temaGuardado === "oscuro");

botonTema.addEventListener("click", () => {
    const oscuro = !document.body.classList.contains("tema-oscuro");
    aplicarTema(oscuro);
    try {
        localStorage.setItem(CLAVE, oscuro ? "oscuro" : "claro");
    } catch (error) {
        console.warn("No se pudo guardar la preferencia:", error.message);
    }
});
