export const calculateTotalPrice = (cart = []) => {
  const result = cart?.reduce((total, product) => {
    console.log(
      `Price: ${product.price}, Quantity: ${product.productQuantity}`,
    );
    return total + product.price * product.productQuantity; // Multiplicar el precio por la cantidad
  }, 0);
  return result;
};
