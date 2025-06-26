import { combineProducts } from "../../../src/shared/utils/function";
import { removeById } from "../../../src/shared/utils/function";

describe("combineProducts function", () => {
  it("should combine arrays, assign unique ids, and sort by typeProduct", () => {
    const cookies = [
      { id: 10, typeProduct: 1, name: "Cookie 1" },
      { id: 11, typeProduct: 0, name: "Cookie 2" }
    ];
    const drinks = [
      { id: 20, typeProduct: 0, name: "Drink 1" },
      { id: 21, typeProduct: 2, name: "Drink 2" }
    ];

    const result = combineProducts(cookies, drinks);

    expect(result).toHaveLength(4);

    expect(result.map(p => p.id)).toEqual([1, 2, 3, 4]);

    expect(result[0].typeProduct).toBe(0);
    expect(result[1].typeProduct).toBe(0);
  });

  it("should return an empty array if no products are provided", () => {
    const result = combineProducts();
    expect(result).toEqual([]);
  });
});

describe("removeById function", () => {
  it("should remove an item from an array by id", () => {
    const array = [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
      { id: 3, name: "Item 3" }
    ];
    const idToRemove = 2;
    const result = removeById(array, idToRemove);
    expect(result).toHaveLength(2);
    expect(result).not.toContainEqual(expect.objectContaining({ id: idToRemove }));
  });

  it("should return the same array if id does not exist", () => {
    const array = [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" }
    ];
    const result = removeById(array, 99);
    expect(result).toHaveLength(2);
    expect(result).toEqual(array);
  });

  it("should return an empty array if input array is empty", () => {
    const result = removeById([], 1);
    expect(result).toEqual([]);
  });
   it("should return the same array if idRemove is null", () => {
    const array = [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" }
    ];
    const result = removeById(array, null);
    expect(result).toEqual(array);
  });

  it("should return an empty array if input is undefined", () => {
    const result = removeById(undefined, 1);
    expect(result).toEqual([]);
  });
});