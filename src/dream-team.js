const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) === false) {
    return false;
  }
  let arr = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] !== "string") {
      continue;
    }
    for (let j = 0; j < members[i].length; j++) {
      if (members[i][j] === " ") {
        continue;
      }
      arr.push(members[i][j].toUpperCase());
      break;
    }
  }
  arr.sort();
  let result = arr.join("");
  return result;
};
