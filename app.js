const phantom = require('phantom');

(async function() {
    const instance = await phantom.create();
    const page = await instance.createPage();
    const status = await page.open('http://www.tigerdirect.com/applications/SearchTools/item-details.asp?EdpNo=3415697');
    const content = await page.property('content');
    
    var reviews = await page.evaluate(function() {
        var junk = [];
        var xs = document.querySelectorAll('.reviewer');
        for(var i = 0; i < xs.length; i++) {
            var myObj = {
                reviewer: xs[i].querySelectorAll('dd')[0].innerHTML,
                date: xs[i].querySelectorAll('dd')[1].innerHTML
            }
            junk.push(myObj);
        }
        return junk;
    });

    for(let i = 0; i < reviews.length; i++)
        console.log(reviews[i].reviewer + " " + " " + reviews[i].date);

    await instance.exit();
}());