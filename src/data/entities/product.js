export class Product {
  constructor(props) {
    this.id = props.id;
    this.typeProduct = props.typeProduct;
    this.name = props.title;
    this.img = props.img;
    this.dataExpired = props.dataExpired;
    this.price = props.price;
    this.quantity = props.quantity;
    this.description= props.description,
    this.slug = props.slug;
    this.code = props.code;
  }
}
