// Importar función desde el módulo
import { generarTabla } from "../modules/modulos_ej3.js";

alert("Generador de Tabla de Multiplicar");

// Solicitar número base
let numero = parseInt(prompt("Ingrese el número para generar su tabla de multiplicar:"));

// Generar tabla de multiplicar
let tabla = generarTabla(numero);

// Mostrar resultados
let mensaje = `Tabla de multiplicar del ${numero}:\n\n`;
for (let i = 0; i < tabla.length; i++) {
    mensaje += `${i + 1} × ${numero} = ${tabla[i]}\n`;
}

alert(mensaje);
