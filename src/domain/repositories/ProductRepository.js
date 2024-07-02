import { doGet } from "../../data/api/apiServices";
import { Product } from "../../data/entities/product";
import ProductAdapter from "../../shared/adapters/ProductAdapater";

export default class ProductRepository {
  static async getDrinks() {
    let dataProduct = [];
    let error = null;
    let PRODUCTS = "http://127.0.0.1:8080/api/products/";
    try {
      const dataResponse = await doGet(PRODUCTS);
      if (dataResponse.status === 200) {
        const dataProduct = dataResponse.data.map((item) => {
            const productEntity = new Product(item)   
            return ProductAdapter.adaptDrinks(productEntity)
        });

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
        const dataProduct = dataResponse.data.map((item) => {
            const productEntity = new Product(item)   
            return ProductAdapter.adaptCookies(productEntity)
        });
        return [dataProduct, error];
      }
    } catch (error) {
      return [dataProduct, error];
    }
  }
}
