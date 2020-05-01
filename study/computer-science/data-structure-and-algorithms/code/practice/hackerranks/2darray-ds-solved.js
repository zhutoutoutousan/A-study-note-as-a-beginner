// https://www.hackerrank.com/challenges/2d-array/problem
'use strict';

const fs = require('fs');

process.env.OUTPUT_PATH = __dirname;
console.log(process.env)

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;



process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});
console.log('Input dealt with')

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the hourglassSum function below.
function hourglassSum(arr) {

    function range(start, stop, step) {
        if (typeof stop === 'undefined') {
            // one param defined
            stop = start;
            start = 0;
        }
    
        if (typeof step == 'undefined') {
            step = 1;
        }
    
        if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
            return[];
        }
    
        var result = [];
        for (let i = start; step > 0 ? i < stop : i > stop; i+= step) {
            result.push(i);
        }
    
        return result;
    }

    function createOffesetArray(arrayIn){
        let x_length = 0;
        x_length = arrayIn[0].length-2;
        return range(0, x_length, 1);
    }

    function sweep(arrayIn){
        let traverseArrayX = [0,...createOffesetArray(arrayIn)];
        let traverseArrayY = [0,...createOffesetArray(arrayIn)];
        let sumArray = [];
        var transformedHourglass;
        traverseArrayX.reduce((_Txaccumulator, TxcurrentValue, _TxcurrentIndex) => {
            traverseArrayY.reduce((_Tyaccumulator, TycurrentValue,_TycurrentIndex) =>{
                transformedHourglass = [[0,0],[0,1],[0,2],[1,1],[2,0],[2,1],[2,2]];
                transformedHourglass.forEach((crv1) =>{
                    crv1[0] += TxcurrentValue;
                    crv1[1] += TycurrentValue;
                    return;
                })
                sumArray.push(transformedHourglass.reduce((Haccumulator, HcurrentValue) => {
                    return Haccumulator + arrayIn[HcurrentValue[0]][HcurrentValue[1]];
                }, 0))
                return transformedHourglass.reduce((Haccumulator, HcurrentValue) => {
                    return Haccumulator + arrayIn[HcurrentValue[0]][HcurrentValue[1]];
                }, 0);
            }, 0)
        })
        console.log(sumArray);
        return Math.max(...sumArray);
    }
    return sweep(arr);
}
    


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    // process.stdinout.write(result + "\n")
    console.log(process.env.OUTPUT_PATH)

    ws.write(result + "\n");

    ws.end();
}
