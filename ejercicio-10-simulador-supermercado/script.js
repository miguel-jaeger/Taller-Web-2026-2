// Ejercicio 10: Simulador completo de registro y cobro de supermercado
let cantidadProductosTexto = prompt("¿Cuántos productos hay en el carrito de compras?");
let cantidadProductos = Number(cantidadProductosTexto);
const carritoDePrecios = [];

for (let i = 0; i < cantidadProductos; i++) {
    let precioIngresado = prompt("Ingrese el precio del producto " + (i + 1) + ":");
    carritoDePrecios.push(Number(precioIngresado));
}

let cuentaTotal = 0;
for (let i = 0; i < carritoDePrecios.length; i++) {
    cuentaTotal = cuentaTotal + carritoDePrecios[i];
}

let verDetalle = confirm("¿Desea revisar el precio de cada producto antes de pagar?");

if (verDetalle === true) {
    for (let i = 0; i < carritoDePrecios.length; i++) {
        alert("Producto " + (i + 1) + ": S/." + carritoDePrecios[i]);
    }
    alert("El total a pagar es: S/." + cuentaTotal);
} else {
    let ultimaPosicion = carritoDePrecios.length - 1;
    let ultimoPrecio = carritoDePrecios[ultimaPosicion];
    alert("Último producto escaneado: S/." + ultimoPrecio);
    alert("El cliente debe pagar un total de: S/." + cuentaTotal);
}
