import { typeProducts } from "../utils/entities/products.js";
import { createProduct } from "../../data/entities/product.js";

class ProductAdapter {
    static Cookies(data) {
        return createProduct({
            id: data.id,
            typeProduct: typeProducts(data.slug),
            title: data.name,
            img: data.img,
            dataExpired: data.dataExpired,
            price: data.price,
            quantity: data.quantity,
            description: data.description,
            slug: data.slug,
            code: data.code
        });
    }
    static Drinks(data) {
        return createProduct({
            id: data.id,
            typeProduct: typeProducts(data.slug),
            title: data.name,
            img: data.img,
            dataExpired: data.dataExpired,
            price: data.price,
            quantity: data.quantity,
            description: data.description,
            slug: data.slug,
            code: data.code
        });
    }
}

export default ProductAdapter