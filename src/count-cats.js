const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let result = 0;
  for (let i = 0; i < backyard.length; i++) {
    result += backyard[i].filter(item => item === '^^').length;
  } 
  return result
};