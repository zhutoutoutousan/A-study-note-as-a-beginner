var fs = require("fs")

// Asynchronous - Opening File
console.log("Fuck you motherfucker");
fs.open('i-created-a-file.txt','a+', function(err, fd){
    if (err) {
        return console.error(err);
    }
    console.log("Mother has been fucked")
})