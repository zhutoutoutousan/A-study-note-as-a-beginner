// https://www.hackerrank.com/challenges/plus-minus/problem
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
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
    let plus = 0;
    let minus = 0;
    let zero = 0;
    let total = 0;

    arr.forEach(value => {
        if(value > 0){
            plus++;
        }
        else if (value === 0){
            zero++;
        }
        else{
            minus++;
        }
    })
    total = arr.length;
    return [plus/total.toFixed(6),minus/total.toFixed(6),zero/total.toFixed(6)];

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));


    let result = plusMinus(arr);
    if(typeof(result) == 'object'){
        for(let i = 0; i < result.length; i++){
            ws.write(result[i] + "\n");
        }
    }
    else if(typeof(result) == "number"){
        ws.write(result + "\n");
    }



    ws.end();
}
