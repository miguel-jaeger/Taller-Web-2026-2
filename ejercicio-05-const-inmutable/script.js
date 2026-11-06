// Ejercicio 5: Declaración de constantes inmutables
const PI = 3.14;

try {
    PI = 3.1416;
} catch (error) {
    console.log("No se puede reasignar una constante:", error.message);
}

console.log("Valor de PI: " + PI);
