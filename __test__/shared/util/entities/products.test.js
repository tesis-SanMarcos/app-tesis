import { typeProducts } from "../../../../src/shared/utils/entities/products";

describe("typeProducts", () => {
  it("debe retornar 1 para 'bebidas'", () => {
    expect(typeProducts("bebidas")).toBe(1);
    expect(typeProducts("BEBIDAS")).toBe(1);
  });

  it("debe retornar 2 para 'galletas'", () => {
    expect(typeProducts("galletas")).toBe(2);
    expect(typeProducts("Galletas")).toBe(2);
  });

  it("debe retornar 0 para valores desconocidos o vacíos", () => {
    expect(typeProducts("otro")).toBe(0);
    expect(typeProducts("")).toBe(0);
    expect(typeProducts()).toBe(0);
  });
});