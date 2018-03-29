const phantom = require('phantom');

(async function() {
    const instance = await phantom.create();
    const page = await instance.createPage();
    const status = await page.open('http://www.tigerdirect.com/applications/SearchTools/item-details.asp?EdpNo=3415697');
    const content = await page.property('content');

    var chunk = await page.evaluate(function() {
        return document.querySelector('.reviewer').innerHTML;
    });
    console.log(chunk.split('\n')[1]);

    await instance.exit();
}());