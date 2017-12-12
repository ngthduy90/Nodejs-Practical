let PI = Math.PI;
let duy = 0;

console.log("Call out of scope");

function circle (radius) {
  console.log(`Duy: ${duy}`);
  duy++;
  return radius * radius * PI;
}

module.exports.circle = circle;
