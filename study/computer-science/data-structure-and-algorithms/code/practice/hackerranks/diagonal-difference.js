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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    const createCoordinateP = (arr) =>  {
        let coordinates = [];
        for(let i = 0; i < arr.length; i++){
                coordinates.push([i,i]);
            }
        return coordinates;
    }

    const createCoordinateR = (arr) =>  {
        let coordinates = [];
        for(let i = 0; i < arr.length; i++){
                coordinates.push([i,arr.length - i - 1]);
            }
        return coordinates;
    }

    const calculateSum = (coordinates) => {
        return coordinates.reduce((accumulator,currentValue) => {
            accumulator += arr[currentValue[0]][currentValue[1]];
            return accumulator;
        },0);
    }

    const difference = (a,b) =>  {
        return Math.abs(a - b);
    }

    let Rsum = 0;
    let Psum = 0;
    let arrCoordinatesR = createCoordinateR(arr);
    let arrCoordinatesP = createCoordinateP(arr);
    Rsum = calculateSum(arrCoordinatesR);
    Psum = calculateSum(arrCoordinatesP);
    
    return difference(Rsum, Psum);

}





function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
