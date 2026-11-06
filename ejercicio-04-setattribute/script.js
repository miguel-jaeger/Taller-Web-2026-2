// Ejercicio 4: Modificación de atributos con setAttribute
const NUEVA_FOTO = "https://picsum.photos/200/200?random=20";

document.getElementById("btnCambiar").addEventListener("click", () => {
    const img = document.getElementById("avatar");
    img.setAttribute("src", NUEVA_FOTO);
    img.setAttribute("alt", "Nueva foto de un perrito");
});
