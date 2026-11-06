// Ejercicio 3: menú hamburguesa responsivo
const botonMenu = document.querySelector(".menu-btn");
const enlaces = document.querySelector(".enlaces");

botonMenu.addEventListener("click", () => {
    const abierto = enlaces.classList.toggle("abierto");
    botonMenu.setAttribute("aria-expanded", String(abierto));
});

enlaces.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
        enlaces.classList.remove("abierto");
        botonMenu.setAttribute("aria-expanded", "false");
    });
});
