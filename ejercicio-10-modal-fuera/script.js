// Ejercicio 10: abrir, cerrar y cerrar al hacer clic fuera
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const span = document.querySelector(".close");

btn.onclick = () => (modal.style.display = "block");
span.onclick = () => (modal.style.display = "none");

window.onclick = (evento) => {
    if (evento.target === modal) {
        modal.style.display = "none";
    }
};
