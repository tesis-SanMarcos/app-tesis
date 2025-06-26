import ProductAdapter from "../../../src/shared/adapters/ProductAdapter";

describe("ProductAdapter", () => {
  it("Cookies debe retornar un producto adaptado correctamente", () => {
    const data = {
      id: 1,
      slug: "galletas",
      name: "Galleta Oreo",
      img: "img.jpg",
      dataExpired: "2025-01-01",
      price: 10,
      quantity: 5,
      description: "Galleta dulce",
      code: "A123"
    };

    const result = ProductAdapter.Cookies(data);
    console.log("🚀 ~ it ~ result:", result)

    expect(result).toMatchObject({
      id: 1,
      typeProduct: expect.any(Number),
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

  it("Drinks debe retornar un producto adaptado correctamente", () => {
    const data = {
      id: 2,
      slug: "bebidas",
      name: "Inka Cola",
      img: "inka.jpg",
      dataExpired: "2026-01-01",
      price: 5,
      quantity: 10,
      description: "Bebida gaseosa",
      code: "B456"
    };

    const result = ProductAdapter.Drinks(data);

    expect(result).toMatchObject({
      id: 2,
      typeProduct: expect.any(Number),
      name: "Inka Cola",
      img: "inka.jpg",
      dataExpired: "2026-01-01",
      price: 5,
      quantity: 10,
      description: "Bebida gaseosa",
      slug: "bebidas",
      code: "B456"
    });
  });
});