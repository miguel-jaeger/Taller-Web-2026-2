// Ejercicio 5: Alteración directa de estilos CSS
document.getElementById("btnTransformar").addEventListener("click", () => {
    const caja = document.querySelector(".caja");
    caja.style.backgroundColor = "orchid";
    caja.style.borderRadius = "50%";
});
