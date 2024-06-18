const { flattenArray } = require("./ArrayUtils");
const { removeDuplicates } = require("./ArrayUtils");

describe("removeDuplicates", () => {
  test("removes duplicates from the array", () => {
    expect(removeDuplicates([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("returns an empty array if input is empty", () => {
    expect(removeDuplicates([])).toEqual([]);
  });

  test("handles array with no duplicates", () => {
    expect(removeDuplicates([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("throws an error if input is not an array", () => {
    expect(() => removeDuplicates("not an array")).toThrow(
      "Input must be an array"
    );
  });
});

describe("flattenArray", () => {
  test("flattens a nested array", () => {
    expect(flattenArray([1, [2, [3, 4], 5], 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("handles already flat array", () => {
    expect(flattenArray([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("handles empty array", () => {
    expect(flattenArray([])).toEqual([]);
  });

  test("throws an error if input is not an array", () => {
    expect(() => flattenArray("not an array")).toThrow(
      "Input must be an array"
    );
  });
});
