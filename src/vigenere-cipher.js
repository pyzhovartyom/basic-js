class VigenereCipheringMachine {
  constructor(direct = true) {
      this.isDirect = direct;
  }

  getShift(key) {
      return (
          key[this.keyId++ % key.length].toUpperCase().charCodeAt(0) -
          "A".charCodeAt(0)
      );
  }

  codify(str, key, x) {
      if (!str || !key) throw Error;

      this.keyId = 0;
      const result = str.split("").map(l => {
          if (!/[A-Za-z]/.test(l)) {
              return l;
          }

          const letterCharCode = l.toUpperCase().charCodeAt(0);
          const offset = "A".charCodeAt(0);
          const position = letterCharCode - offset
          const shift = this.getShift(key);

          let resultCode;
          if (x === "enc") resultCode = (position + shift) % 26;
          if (x === "dec") resultCode = (position - shift + 26) % 26;

          return String.fromCharCode(resultCode + offset);
      });

      return this.isDirect ? result.join("") : result.reverse().join("");
  }

  encrypt(message, key) {
      return this.codify(message, key, "enc");
  }

  decrypt(encryptedMessage, key) {
      return this.codify(encryptedMessage, key, "dec");
  }
}

module.exports = VigenereCipheringMachine;