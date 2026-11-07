document.getElementById("formulario").addEventListener("submit", (e) => {
    let nombre = document.getElementById("nombre").value;
    
    if(nombre.length < 3) {
        e.preventDefault();
        alert("El nombre debe tener al menos 3 caracteres");
    }

})

document.getElementById("btn").addEventListener("click", () => {
  const caja = document.querySelector(".caja");
  caja.style.backgroundColor = "orchid";
  caja.style.borderRadius = "50%";
});