import { combineProducts } from "../../shared/utils/function";
import ProductRepository from "../repositories/ProductRepository"

export default class ProductServices {
    static async getProducts(){
        const [cookies,errorCookies] = await ProductRepository.getCookies()
        const [drinks,errorDrinks] = await ProductRepository.getDrinks()
        const combined = combineProducts(cookies , drinks)
        const error = errorCookies || errorDrinks;
        return [combined,error]
    }
}