const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    // let depth = 1;
    // for (let i = 0; i < arr.length; i++) {
    //   let element = arr[i];
    //   if (Array.isArray(element)) {
    //     if (!element.length) {
    //       depth += 1;
    //       continue;
    //     }
    //     depth += 1;
    //     this.calculateDepth(element);
    //   } else {
    //     continue;
    //   }
    // }
    // return depth;

    // return Array.isArray(arr)
    //   ? Math.max(...arr.map((element) => this.calculateDepth(element))) + 1
    //   : 0;

    let depth = 1;
    if (arr.some((element) => Array.isArray(element))) {
      let temp = arr.reduce((acc, curValue) => acc.concat(curValue), []);
      return depth + this.calculateDepth(temp);
    }
    return depth;
  }
};
