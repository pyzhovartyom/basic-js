const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return 1 + (Array.isArray(arr) ? arr.reduce(function(max, item) {
      return Math.max(max, this.calculateDepth(item));
    }, 0) : -1);
  }
};

// function calculateDepth(arr) {
//   return 1 + (Array.isArray(arr) ? arr.reduce(function(max, item) {
//     return Math.max(max, this.calculateDepth(item));
//   }, 0) : -1);
// }
