// https://scotch.io/tutorials/scraping-the-web-with-node-js
var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
console.log('Processing code');

app.get('/', function(req, res){

var url = 'https://www.imdb.com/title/tt1229340/';

console.log('Processing code');

request(url, function(error, response, html){
    console.log('Processing request');
    if(!error){
    var $ = cheerio.load(html);

    var title, release, rating;
    var json = { title : "", release : "", rating : ""};

    $('.header').filter(function(){
        var data = $(this);
        title = data.children().first().text();            
        release = data.children().last().children().text();

        json.title = title;
        json.release = release;
    })

    $('.star-box-giga-star').filter(function(){
        var data = $(this);
        rating = data.text();

        json.rating = rating;
    })
}

app.listen('8081', () => console.log('The server is listening at port 8081'))

exports = module.exports = app;

fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
    if(!err){
    console.log('File successfully written! - Check your project directory for the output.json file');
    }
    else{
        console.log('Something went wrong.')
    }
})

res.send('Check your console!')
    }) ;
})

