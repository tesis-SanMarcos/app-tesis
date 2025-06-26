import { Routes } from "../../../src/shared/configuration/routes";

describe("Routes", () => {
  it("debe tener todas las rutas definidas correctamente", () => {
    expect(Routes).toHaveProperty("Login", "/auth");
    expect(Routes).toHaveProperty("Home", "Inicio");
    expect(Routes).toHaveProperty("Finance", "/finance");
    expect(Routes).toHaveProperty("Products", "/products");
    expect(Routes).toHaveProperty("Inventory", "/inventory");
    expect(Routes).toHaveProperty("Scanner", "/Scanner");
  });
});