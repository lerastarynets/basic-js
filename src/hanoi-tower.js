const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {};
  result.turns = Math.pow(2, disksNumber) - 1;
  let secondsPerTurn = 3600 / turnsSpeed;
  result.seconds = Math.floor(result.turns * secondsPerTurn);
  return result;
};
