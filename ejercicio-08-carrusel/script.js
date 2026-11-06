// Ejercicio 8: carrusel con controles e indicadores
const pista = document.getElementById("pista");
const slides = document.querySelectorAll(".slide");
const contenedorPuntos = document.getElementById("puntos");
let indice = 0;
let temporizador = null;

slides.forEach((_, posicion) => {
    const punto = document.createElement("button");
    punto.type = "button";
    punto.className = "punto";
    punto.setAttribute("aria-label", "Ir a la diapositiva " + (posicion + 1));
    punto.addEventListener("click", () => irA(posicion));
    contenedorPuntos.appendChild(punto);
});

const puntos = document.querySelectorAll(".punto");

function actualizar() {
    pista.style.transform = "translateX(-" + indice * 100 + "%)";
    puntos.forEach((punto, posicion) => {
        punto.classList.toggle("activo", posicion === indice);
    });
}

function irA(nuevoIndice) {
    indice = (nuevoIndice + slides.length) % slides.length;
    actualizar();
}

function siguiente() {
    irA(indice + 1);
}

function anterior() {
    irA(indice - 1);
}

document.getElementById("siguiente").addEventListener("click", siguiente);
document.getElementById("anterior").addEventListener("click", anterior);

function iniciarAuto() {
    temporizador = setInterval(siguiente, 4000);
}

function detenerAuto() {
    clearInterval(temporizador);
}

document.querySelector(".carrusel").addEventListener("mouseenter", detenerAuto);
document.querySelector(".carrusel").addEventListener("mouseleave", iniciarAuto);

actualizar();
iniciarAuto();
