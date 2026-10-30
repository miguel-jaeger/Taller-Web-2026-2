// Ejercicio 8: Ventana de confirmación booleana (confirm)
var resultado = window.confirm("¿Estás seguro?");

if (resultado === true) {
    window.alert("Está bien, sí estás seguro.");
} else {
    window.alert("Pareces indeciso");
}
