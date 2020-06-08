// https://www.youtube.com/watch?v=NtrnaTKqFPQ&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=8
let stuff = require('./stuff.js')
let events = require('events')
let util = require('util');
let fs = require('fs');
let http = require('http');


console.log("------------------------------------Basics-----------------------------------");

let time = 0;



console.log(__dirname)
console.log(__filename)
console.log(Buffer)

setTimeout(function(){
    console.log('3 seconds have passed');
}, 3000);

let timer = setInterval(function(){
    time += 2;
    console.log(`${time} seconds have passed`)
    if (time > 5) {
        clearInterval(timer)
    }
},2000)

console.log(global);

// normal function statement
function sayHi(){
    console.log('Hi!');
}

sayHi();

// function expression
const sayBye = () => {
    console.log(stuff.counter(['shaun','crystal', 'ryu']));
    console.log(stuff.adder(5,stuff.pi));
    console.log('Bye!');
}

sayBye();

const sayCalled = () => {
    console.log('Called!');
}

const callFunction = (fun) => fun();

callFunction(sayCalled);

console.log("------------------------------------Basics-----------------------------------");

console.log("------------------------------------Event Emitter-----------------------------------");

let myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', (mssg) => {
    console.log(mssg);
})

myEmitter.emit('someEvent', 'the event was emitted');


// let Person = (name) => this.name = name;
let Person = function(name){
    this.name = name;
}

util.inherits(Person, events.EventEmitter);

let james = new Person('james');
let mary = new Person('mary');
let ryu = new Person('ryu');
let people = [james, mary, ryu];

people.forEach((person) => {
    person.on('speak', (mssg) => {
        console.log(`${person.name} said ${mssg}`);
    })
});

james.emit('speak', 'hey dudes');


console.log("------------------------------------Event Emitter-----------------------------------");

console.log("------------------------------------CRUD-----------------------------------");

// Create
let random = fs.readFile('./public/assets/random.txt',  'utf8', (err, data) => console.log(data));
// fs.writeFile('writeMe.txt', random, err =>{
//     if(err) throw err;
//     console.log('created a file');
// });

// Make a directory
// fs.mkdir('stuff', err => {
//     if(err) throw err;
//     console.log('Made a directory');
// });

// Delete a directory
// fs.rmdir('stuff', err => {
//     if(err) throw err;
//     console.log('removed a directory');
// });

// Delete
// fs.unlink('writeMe.txt', (err) => {
//     if (err) throw err;
//     console.log('path/file.txt was deleted')
// });


console.log("------------------------------------CRUD-----------------------------------");



console.log("------------------------------------Server-----------------------------------");

// let server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hey ninjas');
// });

// server.listen(3000, '127.0.0.1');
// console.log('Server is listening to port 3000')

console.log("------------------------------------Server-----------------------------------");



console.log("------------------------------------Stream-----------------------------------");

let myReadStream =  fs.createReadStream(__dirname + '/public/assets/lorem.txt','utf8')
let myWriteSteam = fs.createWriteStream(__dirname + '/writeMe.txt');

myReadStream.pipe(myWriteSteam);

// myReadStream.on('data', (chunk) => {
//     console.log('new chunk received');
//     myWriteSteam.write(chunk);
// });


console.log("------------------------------------Stream-----------------------------------");
