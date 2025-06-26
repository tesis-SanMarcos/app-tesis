export function createProduct({
  id,
  typeProduct,
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
    typeProduct,
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