import ProductRepository from "../../../src/domain/repositories/ProductRepository";
import * as apiServices from "../../../src/shared/api/apiServices";

jest.mock("../../../src/shared/api/apiServices");

describe("ProductRepository", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("getDrinks", () => {
    it("debe retornar los productos tal como vienen cuando la respuesta es exitosa", async () => {
      const mockApiResponse = {
        status: 200,
        data: [{ id: 1 }, { id: 2 }]
      };

      apiServices.doGet.mockResolvedValueOnce(mockApiResponse);

      const [result, error] = await ProductRepository.getDrinks();

      expect(apiServices.doGet).toHaveBeenCalledWith("http://127.0.0.1:8080/api/products/");
      expect(result).toEqual([{ id: 1 }, { id: 2 }]);
      expect(error).toBeNull();
    });

    it("debe retornar error si doGet lanza excepción", async () => {
      apiServices.doGet.mockRejectedValueOnce(new Error("Network error"));

      const [result, error] = await ProductRepository.getDrinks();

      expect(result).toEqual([]);
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("Network error");
    });
  });

  describe("getCookies", () => {
    it("debe retornar los productos tal como vienen cuando la respuesta es exitosa", async () => {
      const mockApiResponse = {
        status: 200,
        data: [{ id: 3 }, { id: 4 }]
      };

      apiServices.doGet.mockResolvedValueOnce(mockApiResponse);

      const [result, error] = await ProductRepository.getCookies();

      expect(apiServices.doGet).toHaveBeenCalledWith("http://127.0.0.1:8080/api/cookies/");
      expect(result).toEqual([{ id: 3 }, { id: 4 }]);
      expect(error).toBeNull();
    });

    it("debe retornar error si doGet lanza excepción", async () => {
      apiServices.doGet.mockRejectedValueOnce(new Error("Network error"));

      const [result, error] = await ProductRepository.getCookies();

      expect(result).toEqual([]);
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("Network error");
    });
  });
});