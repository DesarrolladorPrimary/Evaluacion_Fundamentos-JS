import { validarAcceso } from "../modules/modulos_ej2.js";

alert("Sistema de Autenticación");

// Solicitar entradas al usuario
let edad = parseInt(prompt("Ingrese su edad:"));
let contrasena = prompt("Ingrese su contraseña:");

// Validar acceso
let mensaje = validarAcceso(edad, contrasena);

// Mostrar resultado
alert(mensaje);
