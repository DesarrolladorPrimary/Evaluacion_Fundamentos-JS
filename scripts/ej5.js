// Importar función desde el módulo
import { buscarElemento } from "../modules/modulos_ej5.js";

alert("Búsqueda de Elementos en Arreglo");

// Solicitar cantidad de elementos
let cantidad = parseInt(prompt("¿Cuántos elementos desea ingresar?"));

let lista = [];

// Solicitar cada elemento
for (let i = 0; i < cantidad; i++) {
    lista[i] = prompt(`Ingrese el elemento ${i + 1}:`);
}

// Solicitar elemento a buscar
let elementoBuscado = prompt("Ingrese el elemento que desea buscar:");

// Buscar el elemento
let encontrado = buscarElemento(lista, elementoBuscado);

// Mostrar resultado
if (encontrado) {
    alert(`El elemento "${elementoBuscado}" SÍ existe en el arreglo.`);
} else {
    alert(`El elemento "${elementoBuscado}" NO existe en el arreglo.`);
}
