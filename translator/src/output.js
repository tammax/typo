const fs = require("fs");
const _ = require('lodash');

const filePath = "../data/translated.tsv";

try {
  data = importFile(filePath);
  console.log(data);
} catch (e) {
  console.log(e);
  return;
}

fs.writeFileSync("../../src/assets/words.json", JSON.stringify(data));

function importFile(path) {
  let str = new String();
  str = fs.readFileSync(path, "utf8");
  return _.shuffle(str
    .split("\n")
    .filter(val => val !== "")
    .map(val => {
      [en, jp] = val.split("\t");
      return {
        letters: en.split(''),
        jp,
      }
    }
  ));
}