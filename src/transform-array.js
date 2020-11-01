const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray(arr)) {
    const arrNew = [];
    for (i = 0; i < arr.length; ) {
      if (arr[i] === '--discard-next') {
        i += 2;
      } else if (arr[i] === '--discard-prev') {
        if (arr[i - 2] === '--discard-next') {
          i++;
        } else {
          arrNew.pop();
          i++;
        }
      } else if (arr[i] === '--double-next') {
        if (arr[i + 1]) {
          arrNew.push(arr[i + 1]);
          i++;
        } else {
          i++;
        }
      } else if (arr[i] === '--double-prev') {
        if (arr[i - 2] === '--discard-next') {
          i++;
        } else if (arr[i - 1]) {
          arrNew.push(arrNew[arrNew.length - 1]);
          i++;
        } else {
          i++;
        }
      } else {
        arrNew.push(arr[i]);
        i++;
      }
    }
    return arrNew;
  }
  throw new Error();
};
