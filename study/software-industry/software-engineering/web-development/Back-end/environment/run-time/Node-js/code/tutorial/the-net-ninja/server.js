// -------------------------------- Basics  --------------------------------

// let http = require('http');
// let fs = require('fs');

// let server = http.createServer((req, res) => {
//     console.log(`request was made: ${req.url} `);
//     // res.writeHead(200, {'Content-Type': 'text/html'});
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     // let myReadStream = fs.createReadStream(__dirname + '/public/assets/lorem.txt','utf8');
//     // let myReadStream = fs.createReadStream(__dirname + '/index.html','utf8');  
//     // let myWriteStream = fs.createWriteStream(__dirname + 'writeMe.txt');
//     myReadStream.pipe(res);
// });

// server.listen(3000, '127.0.0.1');
// console.log('The server is listening to port 3000')

// -------------------------------- Basic routing --------------------------------


let http = require('http');
let fs = require('fs');
let server = http.createServer((req, res) => {
    console.log('request was made: ' + req.url);
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'ContentType' : 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if(req.url === '/contact') {
        res.writeHead(200, {'ContentType' : 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);        
    }
    else if(req.url === '/api/ninjas'){
        let ninjas = [{name: 'ryu', age: 29}, {name: 'yoshi', age: 32}]; // Database
        res.writeHead(200, {'ContentType': 'application/json'});
        res.end(JSON.stringify(ninjas))
    } else {
        res.writeHead(404, {'ContentType' : 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);        

    }
});

server.listen(3000, '127.0.0.1');
console.log('The server is listening to port 3000');