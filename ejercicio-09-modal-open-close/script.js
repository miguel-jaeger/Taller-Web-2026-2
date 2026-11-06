// Ejercicio 9: abrir y cerrar el modal
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const span = document.querySelector(".close");

btn.onclick = () => (modal.style.display = "block");
span.onclick = () => (modal.style.display = "none");
