# Basic operations
## Host a server
### Host an html file
```javascript
let port = process.env.PORT ? process.env.PORT || 3000
let http = require('http');
let fs = require('fs');
let server = http.createServer((req, res) => {
    console.log('request was made: ' + req.url);
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'ContentType' : 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if(req.url === '/contact') {
        res.writeHead(200,  {'ContentType' : 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }
    else if(req.url === '/api/json'){
        let json = [{name : 'John', age: 29}, {name: 'Doe', age: 32}];
        res.writeHead(200, {'ContentType': 'application/json'});
        res.end(JSON.stringify(json))}
    else{
        res.writeHead(404, {'ContentType' : 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res)
    }
});

server.listen(port, '127.0.0.1')
console.log(`The server is listening at port ${port}`);
```

# Project structure
## Routes

[node.js require all files in a folder?](https://stackoverflow.com/questions/5364928/node-js-require-all-files-in-a-folder)

# Troubleshooting
## Server
### Node.js serve HTML, but can't load script files in served page
[Node.js serve HTML, but can't load script files in served page](https://stackoverflow.com/questions/48050666/node-js-serve-html-but-cant-load-script-files-in-served-page)