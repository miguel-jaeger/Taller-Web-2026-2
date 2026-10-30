// Ejercicio 3: Selección múltiple con switch y break
// El dato se ingresa desde el formulario y el resultado se muestra en consola.
var formulario = document.querySelector("#form-dia");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    var dia = Number(document.querySelector("#dia").value);
    var mensaje = "";

    switch (dia) {
        case 1:
            mensaje = "Lunes";
            break;
        case 2:
            mensaje = "Martes";
            break;
        case 3:
            mensaje = "Miércoles";
            break;
        case 4:
            mensaje = "Jueves";
            break;
        case 5:
            mensaje = "Viernes";
            break;
        case 6:
        case 7:
            mensaje = "Fin de semana";
            break;
        default:
            mensaje = "Día de semana no válido";
    }

    console.log(mensaje);
});
