function isPalindrome(str) {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  const cleaned = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  return cleaned === cleaned.split("").reverse().join("");
}

function reverseWords(str) {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

module.exports = { reverseWords, isPalindrome };
