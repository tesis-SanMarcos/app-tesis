import { doGet } from "../../shared/api/apiServices";
import ProductAdapter from "../../shared/adapters/ProductAdapter";

export default class ProductRepository {
  static async getDrinks() {
    let dataProduct = [];
    let error = null;
    let PRODUCTS = "http://127.0.0.1:8080/api/products/";
    try {
      const dataResponse = await doGet(PRODUCTS);
      if (dataResponse.status === 200) {
        const dataProduct = dataResponse.data.map((item) => 
            ProductAdapter.Drinks(item)
        );

        return [dataProduct, error];
      }
    } catch (error) {
      return [dataProduct, error];
    }
  }
  static async getCookies() {
    let dataProduct = [];
    let error = null;
    let PRODUCTS = "http://127.0.0.1:8080/api/cookies/";
    try {
      const dataResponse = await doGet(PRODUCTS);
      if (dataResponse.status === 200) {
        const dataProduct = dataResponse.data.map((item) =>
            ProductAdapter.Cookies(item)
        );
        return [dataProduct, error];
      }
    } catch (error) {
      return [dataProduct, error];
    }
  }
}
