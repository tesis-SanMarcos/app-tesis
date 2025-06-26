import { doGet } from "../../shared/api/apiServices";

export default class ProductRepository {
  static async getDrinks() {
    let dataProduct = [];
    let error = null;
    const PRODUCTS = "http://127.0.0.1:8080/api/products/";
    try {
      const dataResponse = await doGet(PRODUCTS);
      if (dataResponse.status === 200) {
        dataProduct = dataResponse.data; // Ya no se adapta
        return [dataProduct, error];
      }
    } catch (err) {
      error = err;
    }
    return [dataProduct, error];
  }

  static async getCookies() {
    let dataProduct = [];
    let error = null;
    const PRODUCTS = "http://127.0.0.1:8080/api/cookies/";
    try {
      const dataResponse = await doGet(PRODUCTS);
      if (dataResponse.status === 200) {
        dataProduct = dataResponse.data; // Ya no se adapta
        return [dataProduct, error];
      }
    } catch (err) {
      error = err;
    }
    return [dataProduct, error];
  }
}