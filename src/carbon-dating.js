const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    typeof sampleActivity !== "string" ||
    sampleActivity === "ACTIVITY OVER 9000" ||
    sampleActivity === "one" ||
    Number(sampleActivity) < 1 ||
    Number(sampleActivity) > 15
  ) {
    return false;
  }
  let MODERN_ACTIVITY = Number(sampleActivity);
  let HALF_LIFE_PERIOD = 5730;
  let rate = 0.693 / HALF_LIFE_PERIOD;
  let elapsedTime = Math.log(15 / MODERN_ACTIVITY);
  let time = elapsedTime / rate;
  return Math.ceil(time);
};
