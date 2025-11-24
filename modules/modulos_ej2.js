const CONTRASENA_CORRECTA = "admin123";

export const validarAcceso = function(edad, contrasena) {
  // Validar edad con operadores relacionales
  const esMayorDeEdad = edad >= 18;
  
  // Validar contraseña con comparación estricta
  const contrasenaValida = contrasena === CONTRASENA_CORRECTA;
  
  // Usar operadores lógicos para evaluar ambas condiciones
  if (esMayorDeEdad && contrasenaValida) {
    return "Acceso concedido. Bienvenido al sistema.";
  } else if (!esMayorDeEdad && !contrasenaValida) {
    return "Acceso denegado. Debe ser mayor de edad y la contraseña es incorrecta.";
  } else if (!esMayorDeEdad) {
    return "Acceso denegado. Debe ser mayor de edad (18 años o más).";
  } else {
    return "Acceso denegado. Contraseña incorrecta.";
  }
};