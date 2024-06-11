import { doGet } from "../../data/api/apiServices";
import { Product } from "../../data/entities/product";

export default class ProductRepository {
  static async getProducts() {
    let dataProduct = [];
    let error = null;
    const PRODUCTS = "http://127.0.0.1:8080/api/products/";
    try {
      const dataProduct = await doGet(PRODUCTS);
      if (dataProduct.status === 200) {
        const products = dataProduct.data.map((item) => new Product(item));
        return [products, error];
      }
    } catch (error) {
      return [dataProduct, error];
    }
  }
}
