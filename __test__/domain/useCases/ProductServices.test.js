import ProductServices from "../../../src/domain/useCases/ProductServices";
import ProductRepository from "../../../src/domain/repositories/ProductRepository";
import { combineProducts } from "../../../src/shared/utils/function";

jest.mock("../../../src/domain/repositories/ProductRepository");
jest.mock("../../../src/shared/utils/function");

describe("ProductServices", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("debe combinar productos y retornar el resultado sin error", async () => {
    const cookies = [{ id: 1 }];
    const drinks = [{ id: 2 }];
    const combined = [{ id: 1 }, { id: 2 }];

    ProductRepository.getCookies.mockResolvedValueOnce([cookies, null]);
    ProductRepository.getDrinks.mockResolvedValueOnce([drinks, null]);
    combineProducts.mockReturnValue(combined);

    const [result, error] = await ProductServices.getProducts();

    expect(ProductRepository.getCookies).toHaveBeenCalled();
    expect(ProductRepository.getDrinks).toHaveBeenCalled();
    expect(combineProducts).toHaveBeenCalledWith(cookies, drinks);
    expect(result).toEqual(combined);
    expect(error).toBeNull();
  });

  it("debe retornar el error si hay error en cookies", async () => {
    const errorCookies = "Error cookies";
    ProductRepository.getCookies.mockResolvedValueOnce([[], errorCookies]);
    ProductRepository.getDrinks.mockResolvedValueOnce([[], null]);
    combineProducts.mockReturnValue([]);

    const [result, error] = await ProductServices.getProducts();

    expect(error === errorCookies || (error && error.message === errorCookies)).toBe(true);
  });

  it("debe retornar el error si hay error en drinks", async () => {
    const errorDrinks = "Error drinks";
    ProductRepository.getCookies.mockResolvedValueOnce([[], null]);
    ProductRepository.getDrinks.mockResolvedValueOnce([[], errorDrinks]);
    combineProducts.mockReturnValue([]);

    const [result, error] = await ProductServices.getProducts();

    expect(error === errorDrinks || (error && error.message === errorDrinks)).toBe(true);
  });
});