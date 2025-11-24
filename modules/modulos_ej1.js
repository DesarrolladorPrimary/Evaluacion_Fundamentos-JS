/**
 * Calcula el promedio de un arreglo de notas
 * @param {Array} notas - Arreglo con las notas del estudiante
 * @returns {number} - Promedio de las notas
 */
export const calcularPromedio = function(notas) {
  let suma = 0;
  // Sumar todas las notas del arreglo
  for (let i = 0; i < notas.length; i++) {
    suma += parseFloat(notas[i]);
  }
  // Retornar el promedio (suma dividida entre cantidad de notas)
  return suma / notas.length;
};


/**
 * Determina el nivel de rendimiento según el promedio
 * @param {number} promedio - Promedio calculado de las notas
 * @returns {string} - Categoría: "Alto", "Medio" o "Bajo"
 */
export const nivelRendimiento = function(promedio) {
  // Validar con operadores relacionales y retornar categoría
  if (promedio >= 4.5) {
    return "Alto";
  } else if (promedio < 4.5 && promedio >= 3.0) {
    return "Medio";
  } else {
    return "Bajo";
  }
};
