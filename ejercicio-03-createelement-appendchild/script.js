// Ejercicio 3: Creación dinámica de elementos
const nuevoDiv = document.createElement("div");
nuevoDiv.textContent = "Hola mundo";
nuevoDiv.style.padding = "10px";
nuevoDiv.style.marginTop = "1rem";
nuevoDiv.style.border = "1px solid #2563eb";
nuevoDiv.style.borderRadius = "8px";

document.body.appendChild(nuevoDiv);
