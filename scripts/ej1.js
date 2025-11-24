// Importar funciones desde el módulo
import { calcularPromedio, nivelRendimiento } from "../modules/modulos_ej1.js";

alert("Sistema de notas")

// Solicitar cantidad de notas
let numNotas = parseInt(prompt("Ingrese el numero de notas: "));

let notas = [];

// Solicitar cada nota
for (let i = 0; i < numNotas; i++) {
    notas[i] = parseFloat(prompt("Ingrese la nota " + (i + 1) + ": "));
}

// Calcular promedio y categoría
let promedio = calcularPromedio(notas);
let categoria = nivelRendimiento(promedio);

// Mostrar resultados
alert("El promedio final es: " + promedio.toFixed(2));
alert("Categoria de rendimiento: " + categoria);
