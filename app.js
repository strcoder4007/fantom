const phantom = require('phantom');

(async function() {
    const instance = await phantom.create();
    const page = await instance.createPage();
    const status = await page.open('http://www.tigerdirect.com/applications/SearchTools/item-details.asp?EdpNo=3415697');
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
        console.log(reviews[i].reviewer + " " + reviews[i].date + " " + reviews[i].rating + " " + reviews[i].review.heading + " " + reviews[i].review.content);

    await instance.exit();
}());