import { calcularPromedio, nivelRendimiento } from "../modules/modulos_ej1.js";


alert("Sistema de notas")
let numNotas = prompt("Ingrese el numero de notas: ")

let notas = [];

for (let i = 0; i < numNotas; i++) {
    notas[i] = prompt("Ingrese la nota " + (i + 1) + ": ");
}

let promedio = calcularPromedio(notas);
let categoria = nivelRendimiento();

alert("El promedio final es: " + promedio.toFixed(2));
alert("Categoria de rendimiento: " + categoria);
