// Ejercicio 4: Acumulación iterativa con un bucle for
let sumaTotal = 0;

for (let i = 1; i <= 5; i++) {
    sumaTotal = sumaTotal + i;
    document.write("<p>Vuelta " + i + ": la suma actual es " + sumaTotal + "</p>");
}

document.write("<h2>El resultado final de la suma es: " + sumaTotal + "</h2>");
