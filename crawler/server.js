// https://scotch.io/tutorials/scraping-the-web-with-node-js

let express = require('express');
let fs = require('fs');
let request = require('request');
let cheerio = require('cheerio');
let app = express();

app.get('/scrape', (req, res) => {

    // The URL that we scrape
    const url = 'https://www.imdb.com/title/tt1229340/';

    // The structure of our request call
    // The first parameter is our URL
    // The callback function takes 3 parameter
    request(url, (error, response, html) => {
      // First we'll make sure no errors occurred when making the request
      if(!error){
        //   Next, use cheerio to load html
        let $ = cheerio.load(html);

        let title, release, rating;
        let json = {title: "", release: "", rating: ""};

        $('.title_wrapper').filter(() => {
            let data = $(this);
            title = data.children()
        })

      }
      else{
          console.log('Something went wrong');
      }

    })
})

app.listen('8081');

console.log('The server is listening on port 8081');

exports = module.exports = app;