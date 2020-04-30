var fs = require('fs');

console.log('Fuck you motherfucker');
fs.stat('get-file-information.txt', function (err, stats){
    if (err) {
        return console.error(err);
    }
    console.log(stats);
    console.log("I found the motherfucker");

    // CHECK THE FILE TYPE
    console.log("isFile ? " + stats.isFile());
    console.log("isDirectory ? " + stats.isDirectory());
})