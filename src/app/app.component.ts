import { Component, OnInit } from '@angular/core';
import * as phantom from "phantom";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';
    name: String = "product name";
    reviews = [{
        reviewer: "some name",
        date: "some date",
        rating: "4.5/5",
        review: {
            heading: "some heading",
            content: "some long boring content"
        }
    }];

    constructor() {
    }

    ngOnInit() {

/*
        (async function() {
            const instance: phantom.PhantomJS = await phantom.create();
            const page: phantom.WebPage = await instance.createPage();
            const status: string = await page.open('http://www.tigerdirect.com/applications/SearchTools/item-details.asp?EdpNo=3415697');
            const content = await page.property('content');
            
            var reviews = await page.evaluate(function() {
                var junk = [];
                var name = document.title;
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

*/

    }//ngOnInit

}
