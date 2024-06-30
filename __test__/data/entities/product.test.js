import {Product} from "../../../src/data/entities/product"

describe("test in entities" , () => {
    const productProps = {
        id: 1,
        title: 'Producto de prueba',
        img: 'imagen.jpg',
        dataExpired: '2024-12-31',
        price: 10.99,
        quantity: 100,
        description: 'Descripción del producto',
        slug: 'producto-de-prueba',
        code: 'ABC123'
      };

    it("products",()=> {
          let productTest = new Product(productProps)


          expect(productTest.id).toBe(productProps.id);
          expect(productTest.name).toBe(productProps.title);
          expect(productTest.img).toBe(productProps.img)
          expect(productTest.dataExpired).toBe(productProps.dataExpired)
          expect(productTest.price).toBe(productProps.price)
          expect(productTest.quantity).toBe(productProps.quantity)
          expect(productTest.description).toBe(productProps.description)
          expect(productTest.slug).toBe(productProps.slug)
          expect(productTest.code).toBe(productProps.code)
    })
})