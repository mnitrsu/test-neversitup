console.clear();

const countSmileys = (input) => {
  let result = {
    true: [],
    false: [],
  };
  input.forEach((item) => {
    result[/(?:;|:)*(\)|D)/.test(item)].push(item);
  });
  console.log(`return: ${result.true.length} > ${result.true.join(" , ")}`);
};

countSmileys([":)", ";(", ";}", ":-D"]); // should return 2;
countSmileys([";D", ":-(", ":-)", ";~)"]); // should return 3;
countSmileys([";]", ":[", ";*", ":$", ";-D"]); // should return 1;
countSmileys([]); // should return 0;

console.log("\n");

countSmileys([":)", ":D", ";)", ";D"]); // should return 4;
countSmileys([":-)", ":-D", ";-)", ";-D"]); // should return 4;
countSmileys([":~)", ":~D", ";~)", ";~D"]); // should return 4;

console.log("\n");
