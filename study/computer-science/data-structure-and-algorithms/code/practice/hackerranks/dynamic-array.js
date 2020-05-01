// REFERENCE: https://www.hackerrank.com/challenges/dynamic-array/problem
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */


//  Problem: queries is [[...],[...],[...]]
function dynamicArray(n, queries) {

// Don't leave 'console.log' in the code when submitting, or else exceeding the time limit

    var queryType;
    var x;
    var y;
    var S_n = [];
    var seqIndex = 0;
    var lastAnswer = 0;
    var lastAnswerArray = [];
    for(let i = 0; i < n; i++){
        S_n.push([]);
    }
    for(let j = 0; j < queries.length; j++){
        queryType = queries[j][0];
        x = queries[j][1];
        y = queries[j][2];
        if(queryType == 1){
            seqIndex = (x ^ lastAnswer) % n;
            S_n[seqIndex].push(y);
        }
        else if(queryType == 2){
            seqIndex = (x ^ lastAnswer) % n;
            lastAnswer = S_n[seqIndex][y % S_n[seqIndex].length];
            lastAnswerArray.push(S_n[seqIndex][y % S_n[seqIndex].length]);
        }
    }

    return lastAnswerArray;



}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const q = parseInt(firstMultipleInput[1], 10);

    let queries = Array(q);

    for (let i = 0; i < q; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const result = dynamicArray(n, queries);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
