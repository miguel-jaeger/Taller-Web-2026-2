// Ejercicio 6: lista de tareas dinámica
const entrada = document.getElementById("nuevaTarea");
const botonAgregar = document.getElementById("agregar");
const lista = document.getElementById("tareas");
const contador = document.getElementById("contador");

const tareas = [];

function actualizarContador() {
    const pendientes = tareas.filter((tarea) => !tarea.completada).length;
    contador.textContent = tareas.length + " tareas (" + pendientes + " pendientes)";
}

function renderizar() {
    lista.innerHTML = "";
    tareas.forEach((tarea) => {
        const item = document.createElement("li");
        item.classList.toggle("completada", tarea.completada);

        const check = document.createElement("input");
        check.type = "checkbox";
        check.checked = tarea.completada;
        check.setAttribute("aria-label", "Marcar tarea como completada");
        check.addEventListener("change", () => {
            tarea.completada = check.checked;
            renderizar();
        });

        const texto = document.createElement("span");
        texto.textContent = tarea.texto;

        const eliminar = document.createElement("button");
        eliminar.type = "button";
        eliminar.textContent = "Eliminar";
        eliminar.addEventListener("click", () => {
            const indice = tareas.indexOf(tarea);
            tareas.splice(indice, 1);
            renderizar();
        });

        item.append(check, texto, eliminar);
        lista.appendChild(item);
    });
    actualizarContador();
}

function agregarTarea() {
    const texto = entrada.value.trim();
    if (!texto) {
        entrada.focus();
        return;
    }
    tareas.push({ texto, completada: false });
    entrada.value = "";
    entrada.focus();
    renderizar();
}

botonAgregar.addEventListener("click", agregarTarea);
entrada.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter") {
        agregarTarea();
    }
});

renderizar();
