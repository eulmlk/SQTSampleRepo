const { add, subtract, multiply, divide } = require("./index");

test("should return the sum of two integers", () => {
  expect(add(1, 2)).toBe(3);
});

test("subtract should return the difference of two integers", () => {
  expect(subtract(5, 2)).toBe(3);
});

test("multiply should return the product of two integers", () => {
  expect(multiply(3, 4)).toBe(12);
});

test("divide should return the division of first integer by second integer", () => {
  expect(divide(8, 2)).toBe(4);
});

test("divide should throw an error when dividing by zero", () => {
  expect(() => divide(8, 0)).toThrow("Cannot divide by zero");
});
