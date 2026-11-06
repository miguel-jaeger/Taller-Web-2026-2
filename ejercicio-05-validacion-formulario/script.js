// Ejercicio 5: validación de formulario en el cliente
const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const clave = document.getElementById("clave");
const exito = document.getElementById("exito");

function marcar(input, error, mensaje) {
    document.getElementById(error).textContent = mensaje;
    input.classList.toggle("invalido", Boolean(mensaje));
    return mensaje === "";
}

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    exito.textContent = "";

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
    const claveValida = marcar(
        clave,
        "errorClave",
        clave.value.length >= 8 ? "" : "La contraseña debe tener al menos 8 caracteres."
    );

    if (nombreValido && correoValido && claveValida) {
        exito.textContent = "Formulario validado y listo para enviarse.";
        formulario.reset();
    }
});
