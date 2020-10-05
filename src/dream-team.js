const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let teamName = ``;
  if (Array.isArray(members)) {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
      if (!members[i].includes(' ')) {
        teamName += members[i].slice(0, 1);
        } else {
          let word = members[i];
          for (let j = 0; j < word.length;) {
            if (word[j] === ' ') {
              j++
            } else {
              teamName += word[j];
              break
            }
          }
        }
      }
    }
  } else {
    return false
  }
  return teamName.toUpperCase().split('').sort().join('')
};
