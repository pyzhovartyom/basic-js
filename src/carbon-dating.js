const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity && 
    typeof sampleActivity === 'string' &&
    sampleActivity > 0 &&
    sampleActivity < MODERN_ACTIVITY) {
    const result = Math.ceil(Math.log(sampleActivity / MODERN_ACTIVITY) * HALF_LIFE_PERIOD / -Math.log(2));
    return Number(result);
  } else {
    return false
  }
};
