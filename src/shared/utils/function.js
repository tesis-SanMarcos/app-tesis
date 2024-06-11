export const removeById = (array = [], idRemove = null) => {
  let removeArrayId = array?.filter((prd) => prd?.id !== idRemove);
  return removeArrayId;
};
