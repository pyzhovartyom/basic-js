const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let counter = 0;
    if (Array.isArray(arr)) {
      counter++;
      for (i = 0; i < arr.length; i++) {
        this.calculateDepth(arr[i])
      }
    } else {
      counter += 0
    }
    return counter
  }
};

// function calculateDepth(arr) {
//   return 1 + (Array.isArray(arr) ? arr.reduce(function(max, item) {
//     return Math.max(max, this.calculateDepth(item));
//   }, 0) : -1);
// }
