export const removeById = (array = [], idRemove = null) => {
  let removeArrayId = array?.filter((prd) => prd?.id !== idRemove);
  return removeArrayId;
};

export const combineProducts = (...productsArray) => {
    const combinedArray = [];
  
    productsArray.forEach((array) => {
        combinedArray.push(...array);
    });

    return makeUniqueIdsAndSortByTypeProduct(combinedArray);
  };

  const makeUniqueIdsAndSortByTypeProduct = (products) => {
    // Ordenar por typeProduct (0 primero)
    products.sort((a, b) => {
      if (a.typeProduct === 0 && b.typeProduct !== 0) {
        return -1; // a debe venir antes que b
      } else if (a.typeProduct !== 0 && b.typeProduct === 0) {
        return 1; // b debe venir antes que a
      } else {
        return 0; // mantener el orden actual
      }
    });
  
    // Asignar IDs únicos
    let uniqueIdCounter = 1;
    const uniqueProducts = products.map((product) => ({
      ...product,
      id: uniqueIdCounter++, // Asignar ID único
    }));
  
    return uniqueProducts;
  };