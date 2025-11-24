// Buscar un elemento en el arreglo (función flecha)
export const buscarElemento = (lista, elemento) => {
  // Recorrer el arreglo manualmente
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      return true;
    }
  }
  return false;
};
