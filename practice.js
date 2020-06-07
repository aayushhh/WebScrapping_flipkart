const pupprteer = require('puppeteer')
const chalk = require('chalk')

const error = chalk.bold.red;
const success = chalk.keyword("green")

(async () =>{
    try{
// open the headless browser
var browser  = await pupprteer.launch({ headless: false});
// open a new page
var page = await browser.newPage();
//enter url in page 
await page.goto(`https://www.flipkart.com/realme-x2-pearl-green-64-gb/p/itm75023903eb431`);
await page.waitForSelector(`container`);

var news = await page.evaluate (() => {
    var title = document.querySelector(`span._35KyD6`);
    var price = document.querySelector(`a._1vC4OE _3qQ9m1`);
})
return title;
//Googl say chees!!

await browser.close();

false.writeFile("new.json", JSON.stringify(news), function(err){
    if(err) throw err;
    console.log("saved");
});
console.log("Browswr Closed");



    } catch(err){
        console.log(error(err));
        await browser.close();
        console.log("Browser closed");
        
        
    }
})