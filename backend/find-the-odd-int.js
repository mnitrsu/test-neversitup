const readlineSync = require("readline-sync");

console.clear();

while (true) {
  console.clear();
  const input = readlineSync.question("Input something? -> ");
  const input_arr = input.split(",");
  let obj = {};
  input_arr.forEach((item) => {
    if (!(item in obj)) {
      obj[item] = input_arr.filter((num) => num === item).length;
    }
  });
  let isOdd = [];
  let temp = 0;
  Object.keys(obj).forEach((key) => {
    if (!(obj[key] % 2 === 0) && obj[key] >= temp) {
      isOdd.push(key);
      temp = obj[key];
    }
  });
  console.log(`\n======`);
  console.log(
    `\n[${input}] should return ${Math.max(...isOdd)}, beacuse it occurs ${
      obj[Math.max(...isOdd)]
    } time(s) (which is odd).`
  );
  const pause = readlineSync.question(`\n---
    press 'enter' to restart\n`);
}
