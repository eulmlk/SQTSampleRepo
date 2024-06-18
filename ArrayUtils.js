function removeDuplicates(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array");
  }
  return arr;
}

function flattenArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array");
  }
  return arr.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val),
    []
  );
}

module.exports = { flattenArray, removeDuplicates };
