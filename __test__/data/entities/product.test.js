import { createProduct } from "../../../src/data/entities/product";

describe("createProduct", () => {
  it("debe crear un producto correctamente con todos los campos", () => {
    const input = {
      id: 1,
      typeProduct: "galleta",
      title: "Rellenitas",
      img: "img.jpg",
      dataExpired: "2025-01-01",
      price: 10,
      quantity: 5,
      description: "Galleta dulce",
      slug: "rellenitas",
      code: "A123"
    };

    const expected = {
      id: 1,
      typeProduct: "galleta",
      name: "Rellenitas",
      img: "img.jpg",
      dataExpired: "2025-01-01",
      price: 10,
      quantity: 5,
      description: "Galleta dulce",
      slug: "rellenitas",
      code: "A123"
    };

    expect(createProduct(input)).toEqual(expected);
  });

  it("debe manejar campos opcionales faltantes", () => {
    const input = {
      id: 2,
      typeProduct: "bebida",
      title: "Inka Cola",
      img: "inka.jpg",
      dataExpired: "2026-01-01",
      price: 5,
      quantity: 10,
      slug: "inka-cola",
      code: "B456"
      // description no está presente
    };

    const result = createProduct(input);
    expect(result.description).toBeUndefined();
    expect(result.name).toBe("Inka Cola");
  });
});