# Table of Contents
- [Table of Contents](#table-of-contents)
- [RTFM](#rtfm)
- [Networking](#networking)
  - [Host a server](#host-a-server)
    - [Host an html file](#host-an-html-file)
- [Navigation](#navigation)
  - [Keyboard shortcut](#keyboard-shortcut)
  - [```process.exit()```](#processexit)
  - [```SIGTERM```](#sigterm)
  - [Reference](#reference)
- [File system - ```fs```](#file-system---fs)
  - [Open a file](#open-a-file)
  - [Read a file](#read-a-file)
  - [Write to a file](#write-to-a-file)
  - [Get the information of the file](#get-the-information-of-the-file)
- [Networking](#networking-1)
  - [http request](#http-request)
  - [Basic concepts](#basic-concepts)
    - [Synchronous vs Asynchronous](#synchronous-vs-asynchronous)
- [Troubleshoot](#troubleshoot)
  - [```TypeError [ERR_INVALID_CALLBACK]: Callback must be a function. Received undefined```](#typeerror-err_invalid_callback-callback-must-be-a-function-received-undefined)
- [Resources](#resources)
  - [API](#api)
  - [Tutorials](#tutorials)

# RTFM

# Networking
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

# Navigation
## Keyboard shortcut
Press ```ctrl+C```, this is not a programmatical exiting way.

## ```process.exit()```
```javascript
process.exit(0)   // 0 means success

// Or you can set this code and the program will gracefully exit when all the processing is done.
process.exitCode = 1;

```
When Node.js runs this line, the process is immediately forced to terminate.

This means that any callback that's pending, any network request still being sent, any filesystem access, or processes writing to ```stdout``` or ```stderr``` -all is going to be ungracefully terminated right away.

See more on [Node.js API](https://nodejs.org/api/process.html#process_exit_codes)

## ```SIGTERM```

## Reference
[Node.js tutorial](https://nodejs.dev/how-to-exit-from-a-nodejs-program)


# File system - ```fs```
## Open a file
## Read a file
## Write to a file
## Get the information of the file

# Networking
## http request
## Basic concepts
### Synchronous vs Asynchronous


# Troubleshoot
## ```TypeError [ERR_INVALID_CALLBACK]: Callback must be a function. Received undefined```
[Stack overflow](https://stackoverflow.com/questions/50438592/typeerror-err-invalid-callback-callback-must-be-a-function)
[node.js fs](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback)

# Resources
## API
[node.js API](https://nodejs.org/docs/latest/api/)
## Tutorials
[Introduction to Node.js](https://nodejs.dev/)

[Node JS Tutorial for Beginners](https://www.youtube.com/watch?v=w-7RQ46RgxU&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp)