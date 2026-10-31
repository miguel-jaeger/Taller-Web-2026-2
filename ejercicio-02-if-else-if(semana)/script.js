// Ejercicio 2: Evaluación múltiple (if / else if / else)
// El dato se ingresa desde el formulario y el resultado se muestra en consola.
var formulario = document.querySelector("#form-puntuacion");

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    var dia = Number(document.querySelector("#dia").value);

    /*if (dia == 1) {
        console.log("Hoy es Lunes");
    } else if (dia == 2) {
        console.log("Hoy es Martes");
    } else if (dia == 3) {
        console.log("Hoy es Miércoles");
    } else if (dia == 4) {
        console.log("Hoy es Jueves");
    }
    else if (dia == 5) {
        console.log("Hoy es Viernes");
    }
    else if (dia == 6) {
        console.log("Hoy es Sábado");
    }
    else if (dia == 7) {
        console.log("Hoy es Domingo");
    } else {
        console.log("La semana solo tiene 7 días");
    }*/

    switch (dia) {
        case 1:
            console.log("Hoy es Lunes");
            break;
        case 2:
            console.log("Hoy es Martes");
            break;
        case 3:
            console.log("Hoy es Miércoles");
            break;
        case 4:
            console.log("Hoy es Jueves");
            break;
        case 5:
            console.log("Hoy es Viernes");
            break;
        case 6:
            console.log("Hoy es Sábado");
            break;
        case 7:
            console.log("Hoy es Domingo");
            break;

        default:
            break;
    }
});
