export const calcularPromedio = function(notas) {
  let suma = 0;
  for (let i = 0; i < notas.length; i++) {
    suma += parseFloat(notas[i]);
  }
  return suma / notas.length;
};


export const nivelRendimiento = function(promedio) {
  if (promedio >= 4.5) {
    return "Alto";
  } else if (promedio < 4.5 && promedio >= 3.0) {
    return "Medio";
  } else {
    return "Bajo";
  }
};
