// https://scotch.io/tutorials/scraping-the-web-with-node-js

let express = require('express');
let fs = require('fs');
let request = require('request');
let cheerio = require('cheerio');
let app     = express();

app.get('/scrape', function(req, res){

let url = 'http://www.imdb.com/title/tt1229340/';

request(url, function(error, response, html){
    if(!error){
        let $ = cheerio.load(html);

    let title, release, rating;
    let json = { title : "", release : "", rating : ""};

    $('.header').filter(function(){
        let data = $(this);
        title = data.children().first().text();            
        release = data.children().last().children().text();

        json.title = title;
        json.release = release;
    })

    $('.star-box-giga-star').filter(function(){
        let data = $(this);
        rating = data.text();

        json.rating = rating;
    })
}

// To write to the system we will use the built in 'fs' library.
// In this example we will pass 3 parameters to the writeFile function
// Parameter 1 :  output.json - this is what the created filename will be called
// Parameter 2 :  JSON.stringify(json, null, 4) - the data to write, here we do an extra step by calling JSON.stringify to make our JSON easier to read
// Parameter 3 :  callback function - a callback function to let us know the status of our function

fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){

    console.log('File successfully written! - Check your project directory for the output.json file');

})

// Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
res.send('Check your console!')

    }) ;
})

exports = module.exports = app;