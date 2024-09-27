const readlineSync = require("readline-sync");

console.clear();

while (true) {
  let uniq = "";
  console.clear();
  const input = readlineSync.question("Input something? -> ");
  if (input.length > 1) {
    const input_arr = input.split("");
    let output = [];
    let output_rev = [];
    let temp = [...input_arr];
    for (position = 0; position < input_arr.length - 1; position++) {
      for (i = 0; i < temp.length; i++) {
        temp.push(temp.splice(position, 1).toString());
        output.push(temp.join(""));
        output_rev.push(temp.reverse().join(""));
      }
    }
    uniq = [...new Set([...output, ...output_rev])].filter((item) => item.length > 1).sort();
  } else {
    uniq = input;
  }
  console.log(`\n======`);
  console.log(`\nWith input '${input}':`);
  console.log(`Your function should return: ${uniq}`);
  const pause = readlineSync.question(`\n---
    press 'enter' to restart\n`);
}
