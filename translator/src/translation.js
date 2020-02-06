const puppeteer = require("puppeteer");
const fs = require("fs");
const _ = require('lodash');

const filePath = "../data/ja.txt";

(async () => {

  let jp, en, translated;

  try {
    jp = importFile(filePath);
  } catch (e) {
    console.log(e);
    return;
  }

  const browser = await puppeteer.launch({
    args: ["--no-sandbox"],
    // headless: false
  });
  const page = await browser.newPage();
  await page.goto(
    "https://translate.google.com/?hl=ja#view=home&op=docs&sl=ja&tl=en",
    { waitUntil: "domcontentloaded" }
  );

  const input = await page.$("#tlid-file-input");
  await input.uploadFile(filePath);

  //翻訳ボタンを押下
  await Promise.all([
    page.waitForNavigation({waitUntil: "domcontentloaded"}),
    await page.click(".tlid-translate-doc-button")
  ]);

  en = await page.$eval("pre", item => {
    return item.textContent
      .toLowerCase()
      .split("\n")
      .filter(val => val !== '');
  });

  await browser.close();

  if (jp.length !== en.length) {
    throw new Error(`ja:(${jp.length}) en:(${en.length}) count is a difference`);
  }

  await browser.close();

  translated = _.zip(en, jp);

  exportFile(translated);
})();

function importFile(path) {
  let str = new String();
  str = fs.readFileSync(path, "utf8");
  return str.split('\n').filter(val => val !== '');
}

function exportFile(data) {
  let str = new String();
  data.forEach(([en, jp]) => {
    str += `${en}\t${jp}\n`;
  });
  fs.writeFileSync("../data/translated.tsv", str);
}