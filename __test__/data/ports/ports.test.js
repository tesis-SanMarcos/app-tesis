import { typeProducts } from "../../../src/data/ports/ports";

describe("typeProducts", () => {
  it("debe retornar 1 para 'bebidas' (mayúsculas o minúsculas)", () => {
    expect(typeProducts("bebidas")).toBe(1);
    expect(typeProducts("BEBIDAS")).toBe(1);
    expect(typeProducts("BeBiDaS")).toBe(1);
  });

  it("debe retornar 2 para 'galletas' (mayúsculas o minúsculas)", () => {
    expect(typeProducts("galletas")).toBe(2);
    expect(typeProducts("GALLETA")).toBe(0); // "GALLETA" no está en VALUES, solo "galletas"
    expect(typeProducts("Galletas")).toBe(2);
  });

  it("debe retornar 0 para valores desconocidos o vacíos", () => {
    expect(typeProducts("otro")).toBe(0);
    expect(typeProducts("")).toBe(0);
    expect(typeProducts()).toBe(0);
  });
});