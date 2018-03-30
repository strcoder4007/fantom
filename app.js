const phantom = require('phantom');

if (process.argv.length <= 2) {
    console.log("Enter the url. Eg: node app.js url_here");
    process.exit(-1);
}
 
var url = process.argv[2];

(async function(url) {
    const instance = await phantom.create();
    const page = await instance.createPage();
    const status = await page.open(url);
    const content = await page.property('content');
    
    var reviews = await page.evaluate(function() {
        var junk = [];
        var allReviews = document.querySelectorAll('blockquote');
        var users = document.querySelectorAll('.reviewer');
        var ratings = document.querySelectorAll('.itemRating > strong');
        for(var i = 0; i < users.length; i++) {
            var myObj = {
                reviewer: users[i].querySelectorAll('dd')[0].innerHTML,
                date: users[i].querySelectorAll('dd')[1].innerHTML,
                rating: ratings[i].innerHTML,
                review: {
                    heading: allReviews[i].querySelector('h6').innerHTML,
                    content: allReviews[i].querySelector('p').innerHTML
                }
            }
            junk.push(myObj);
        }
        return junk;
    });

    for(let i = 0; i < reviews.length; i++)
        console.log("Reviewer: " + reviews[i].reviewer + "\nDate: " + reviews[i].date + "\nRating: " + reviews[i].rating + "/5\n" + reviews[i].review.heading + "\n" + reviews[i].review.content + "\n\n");

    await instance.exit();
}(url));