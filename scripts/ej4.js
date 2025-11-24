// Importar funciones desde el módulo
import { procesarImpuestos } from "../modules/modulos_ej4.js";

alert("Sistema de Cálculo de Impuestos");

// Procesar impuestos de productos
let totalImpuestos = procesarImpuestos();

// Mostrar resultado
alert(`El impuesto total acumulado es: $${totalImpuestos.toFixed(2)}`);
