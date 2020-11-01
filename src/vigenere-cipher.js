const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(arg) {
    if (!arg) {
      throw new Error;
    }
  }    
  decrypt(arg) {
    if (!arg) {
      throw new Error;
    }
  }
}

module.exports = VigenereCipheringMachine;

