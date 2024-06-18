const { isPalindrome } = require("./StringUtils");
const { reverseWords } = require("./StringUtils");

describe("reverseWords", () => {
  test("reverses each word in the string", () => {
    expect(reverseWords("hello world")).toBe("olleh dlrow");
  });

  test("handles empty string", () => {
    expect(reverseWords("")).toBe("");
  });

  test("throws an error if input is not a string", () => {
    expect(() => reverseWords(123)).toThrow("Input must be a string");
  });
});

describe("isPalindrome", () => {
  test("returns true for a palindrome", () => {
    expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
  });

  test("returns false for a non-palindrome", () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  test("handles empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });

  test("throws an error if input is not a string", () => {
    expect(() => isPalindrome(123)).toThrow("Input must be a string");
  });
});
