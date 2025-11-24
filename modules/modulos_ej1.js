
let promedio = 0;
let categoria = "";

export const calcularPromedio = (notas) => {
  let suma = 0;
  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }
  return promedio = suma / notas.length;
};


export const nivelRendimiento = () => {
 
  if (promedio >= 4.5) {

    return categoria = "Alto";

  } else if (promedio < 4.5 && promedio >= 3.0) {

    return  categoria = "Medio";

  } else if (promedio < 3.0) {

    return categoria = "Bajo";

  }
};
