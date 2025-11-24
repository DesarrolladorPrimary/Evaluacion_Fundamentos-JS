// Generar tabla de multiplicar del 1 al 10
export const generarTabla = (numero) => {
  let resultados = [];
  
  // Ciclo para generar multiplicaciones del 1 al 10
  for (let i = 1; i <= 10; i++) {
    resultados.push(i * numero);
  }
  
  return resultados;
};
