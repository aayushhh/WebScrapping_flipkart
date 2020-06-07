const puppeteer = require("puppeteer");
const chalk = require("chalk");
var fs = require("fs");

// MY OCD of colorful console.logs for debugging... IT HELPS
const error = chalk.bold.red;
const success = chalk.keyword("green");

(async () => {
  try {
    // open the headless browser
    var browser = await puppeteer.launch({ headless: true });
    // open a new page
    var page = await browser.newPage();
    // enter url in page
    await page.goto(`https://www.flipkart.com/realme-x2-pearl-green-64-gb/p/itm75023903eb431/`);
    await page.waitForSelector("span._35KyD6");

    var news = await page.evaluate(() => {
      var title = document.querySelectorAll(`span._35KyD6`);
      const newLocal = `div._1uv9Cb`;
      var price = document.querySelectorAll(newLocal);
      
     
      return title;
    });
    // console.log(news);
    await browser.close();
    // Writing the detials inside a json file
    fs.writeFile("productDetails.json", JSON.stringify(news), function(err) {
      if (err) throw err;
      console.log("Saved!");
    });
    console.log(success("Browser Closed"));
  } catch (err) {
    // Catch and display errors
    console.log(error(err));
    await browser.close();
    console.log(error("Browser Closed"));
  }
})();