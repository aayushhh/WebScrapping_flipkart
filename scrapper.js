const puppeteer = require("puppeteer");
const chalk = require("chalk");
var fs = require("fs");

// MY OCD of colorful console.logs for debugging... IT HELPS
const error = chalk.bold.red;
const success = chalk.keyword("green");

(async () => {

	const page = await browser.newPage();
	await page.goto(`https://www.flipkart.com/realme-x2-pearl-green-64-gb/p/itm75023903eb431`);
	await page.waitForSelector(`a.data-reactroot`);

    var productInfo = await page.evaluate(() => {
       
        /* Get product title */
        let title = document.body.querySelector(`span._35KyD6`);

        /* Get availability */
        let price = document.body.querySelector(`a._1vC4OE _3qQ9m1`)
        

        /* Get list price 
        let listPrice = document.body.querySelector('div class._1vC4OE _3qQ9m1').innerText;

        /* Get price 
       <!-- let av = document.body.querySelector('#priceblock_ourprice').innerText; -->*/

        /* Get product description 
        let description = document.body.querySelector('#renewedProgramDescriptionAtf').innerText;

        /* Get product features 
        let features = document.body.querySelectorAll('#feature-bullets ul li');
        let formattedFeatures = [];

        features.forEach((feature) => {
            formattedFeatures.push(feature.innerText);
        });

        /* Get comparable items 
        let comparableItems = document.body.querySelectorAll('#HLCXComparisonTable .comparison_table_image_row .a-link-normal');                
        formattedComparableItems = [];

        comparableItems.forEach((item) => {
            formattedComparableItems.push(`https://flipkart.com${item.getAttribute('href')}`);
        });
        */
        
        var product = { 
            "title": title,
            "price": price
        

        };

        return product;
        
    });

    console.log(productInfo);
    await browser.close();

}).catch(function(error) {
    console.error(error);
});