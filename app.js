const phantom = require('phantom');

(async function() {
    const instance = await phantom.create();
    const page = await instance.createPage();
    const status = await page.open('http://www.tigerdirect.com/applications/SearchTools/item-details.asp?EdpNo=3415697');
    console.log(status);
    const content = await page.property('content');
    console.log(content);
    await instance.exit();
}());