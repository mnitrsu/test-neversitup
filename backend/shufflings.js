const readlineSync = require("readline-sync");

console.clear();

// const input = readlineSync.question("Input something? -> ");
const input = "aabb";
const input_arr = input.split("");
let output = [];
let temp = [...input_arr];
for (i = 0; i < temp.length; i++) {
  console.log(i);
  if (i > 0) {
    temp.push(temp.splice(0, 1));
    console.log(temp);
  }
  output.push(temp.join(""));
}
console.log(`With input '${input}'`);
console.log(`Your function should return: ${output}`);

// aabb
// abab
// abba
// aabb
