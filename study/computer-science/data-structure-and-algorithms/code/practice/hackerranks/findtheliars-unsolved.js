// https://www.hackerrank.com/challenges/liars/problem
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the liars function below.
 */
function liars(n, sets) {
    /*
     * Write your code here.
     */
    // Max: all sweep chunk is distributed;
    // Min: all sweep chunk element is shared;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let sets = Array(m);

    for (let setsRowItr = 0; setsRowItr < m; setsRowItr++) {
        sets[setsRowItr] = readLine().split(' ').map(setsTemp => parseInt(setsTemp, 10));
    }

    let result = liars(n, sets);

    ws.write(result.join(" ") + "\n");

    ws.end();
}
