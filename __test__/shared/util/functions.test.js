import { removeById } from "../../../src/shared/utils/function"

describe("removeById function", () => {
  it("should remove an item from an array by id", () => {
    // Arrange
    const array = [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
      { id: 3, name: "Item 3" }
    ];
    const idToRemove = 2;

    // Act
    const result = removeById(array, idToRemove);

    // Assert
    expect(result).toHaveLength(2); // Verifica que el tamaño del array resultante sea 2
    expect(result).not.toContainEqual(expect.objectContaining({ id: idToRemove })); // Verifica que el array resultante no contenga un objeto con el id removido
  });
});
