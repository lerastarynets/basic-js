const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  let cats = 0;
  let len = array.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] == "^^") {
        cats += 1;
      }
    }
  }
  return cats;
};
