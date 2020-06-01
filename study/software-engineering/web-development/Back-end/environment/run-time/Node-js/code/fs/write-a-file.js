var fs = require("fs");

var data = [[1,2,3,4,'\n'],[1,2,3,4,'\n'],[5,6,7,8,'\n'],[2,4,5,6,'\n']];

console.log("Going to write into existing file");
fs.writeFile('create-a-file-for-writing.txt', data , function(err) {
    if (err) {
        return console.error(err);
    }

    console.log("Data written successfully!");
    console.log("Let's read newly written data");

    fs.readFile('create-a-file-for-writing.txt', function (err, data) {
        if (err) {
            return console.error(err)
        }
        console.log("Asynchronous read: " + data.toString());
    });

});