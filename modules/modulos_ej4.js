// Calcular impuesto de un producto (función declarada)
export function calcularImpuestoUnitario(valor, porcentaje) {
  return valor * (porcentaje / 100);
}

// Procesar impuestos de múltiples productos (función expresada)
export const procesarImpuestos = function() {
  // Solicitar cantidad de productos
  let cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos:"));
  
  let totalImpuestos = 0;
  
  // Ciclo para procesar cada producto
  for (let i = 1; i <= cantidadProductos; i++) {
    let valor = parseFloat(prompt(`Producto ${i} - Ingrese el valor:`));
    let porcentaje = parseFloat(prompt(`Producto ${i} - Ingrese el porcentaje de impuesto:`));
    
    // Calcular impuesto del producto actual
    let impuesto = calcularImpuestoUnitario(valor, porcentaje);
    totalImpuestos += impuesto;
  }
  
  return totalImpuestos;
};
