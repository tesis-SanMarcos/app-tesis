import { createProduct } from "../../../src/data/entities/product";
import { typeProducts } from "../../../src/data/ports/ports";

describe("createProduct", () => {
  it("debe crear un producto correctamente con todos los campos", () => {
    const input = {
      id: 1,
      title: "Galleta Oreo",
      img: "img.jpg",
      dataExpired: "2025-01-01",
      price: 10,
      quantity: 5,
      description: "Galleta dulce",
      slug: "galletas",
      code: "A123"
    };

    const result = createProduct(input);

    expect(result).toEqual({
      id: 1,
      typeProduct: typeProducts("galletas"),
      name: "Galleta Oreo",
      img: "img.jpg",
      dataExpired: "2025-01-01",
      price: 10,
      quantity: 5,
      description: "Galleta dulce",
      slug: "galletas",
      code: "A123"
    });
  });

  it("debe asignar typeProduct 0 si el slug no es válido", () => {
    const input = {
      id: 2,
      title: "Producto X",
      img: "img2.jpg",
      dataExpired: "2026-01-01",
      price: 20,
      quantity: 2,
      description: "Otro producto",
      slug: "otro",
      code: "B456"
    };

    const result = createProduct(input);

    expect(result.typeProduct).toBe(0);
  });
});