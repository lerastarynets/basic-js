const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let result = [];
  if (!Array.isArray(arr)) {
    throw Error;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--double-next") {
      if (i === arr.length - 1) {
        continue;
      }
      result.push(arr[i + 1]);
    } else if (arr[i] === "--double-prev") {
      if (i === 0 || result[i - 1] === undefined) {
        continue;
      }
      result.push(result[i - 1]);
    } else if (arr[i] === "--discard-next") {
      if (i === arr.length - 1) {
        continue;
      }
      i++;
    } else if (arr[i] === "--discard-prev") {
      if (i === 0 || arr[i - 2] === "--discard-next") {
        continue;
      }
      result.pop();
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};
