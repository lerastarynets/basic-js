const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options.additionRepeatTimes == undefined) {
    options.additionRepeatTimes = 0;
  }
  if (options.repeatTimes == undefined) {
    options.repeatTimes = 0;
  }
  if (options.separator == undefined) {
    options.separator = "+";
  }
  if (options.additionSeparator == undefined) {
    options.additionSeparator = "|";
  }
  if (options.addition === undefined) {
    options.addition = "";
  }
  if (options.addition === null) {
    options.addition = String(options.addition);
  }
  if (typeof str !== "string") {
    str = String(str);
  }
  if (typeof options.addition !== "string") {
    options.addition = String(options.addition);
  }

  let result = "";
  let additionWithSeparatorString = "";
  for (let i = 1; i < options.additionRepeatTimes; i++) {
    additionWithSeparatorString += options.addition;
    additionWithSeparatorString += options.additionSeparator;
  }
  additionWithSeparatorString += options.addition;

  for (let i = 1; i < options.repeatTimes; i++) {
    result += str;
    result += additionWithSeparatorString;
    result += options.separator;
  }
  result += str;
  result += additionWithSeparatorString;
  return result;
};
