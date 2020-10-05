const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let season = ``;
  if (typeof date === 'object') {
    let monthIndex = date.getMonth();
    if (monthIndex >= 2 && monthIndex <= 4) {
      season = 'spring';
    } else if (monthIndex >= 5 && monthIndex <= 7) {
      season = 'summer';
    } else if (monthIndex >= 8 && monthIndex <= 10) {
      season = 'autumn';
    } else if (monthIndex === 11 || monthIndex === 0 || monthIndex === 1) {
      season = 'winter';
    } else {
      return false
    }
    return season
  } else if (!date) {
    return 'Unable to determine the time of year!'
  }
  return Error;
}; 
