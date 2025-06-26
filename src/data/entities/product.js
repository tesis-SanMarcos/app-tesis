import { typeProducts } from "../ports/ports";
export function createProduct({
  id,
  title,
  img,
  dataExpired,
  price,
  quantity,
  description,
  slug,
  code,
}) {
  return {
    id,
    typeProduct:typeProducts(slug),
    name: title,
    img,
    dataExpired,
    price,
    quantity,
    description,
    slug,
    code,
  };
}