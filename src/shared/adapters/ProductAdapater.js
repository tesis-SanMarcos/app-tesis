import { typeProducts } from "../utils/entities/products.js";

class ProductAdapter {

    static adaptCookies(data) {
        return {
            id: data.id,
            typeProduct: typeProducts(data.slug),
            name: data.name,
            img: data.img,
            dataExpired: data.dataExpired,
            price: data.price,
            quantity: data.quantity,
            slug: data.slug,
            code: data.code
        };
    }
    static adaptDrinks(data) {
        return {
            id: data.id,
            typeProduct: typeProducts(data.slug),
            name: data.name,
            img: data.img,
            dataExpired: data.dataExpired,
            price: data.price,
            quantity: data.quantity,
            description: data.description,
            slug: data.slug,
            code: data.code
        };
    }
}

export default ProductAdapter