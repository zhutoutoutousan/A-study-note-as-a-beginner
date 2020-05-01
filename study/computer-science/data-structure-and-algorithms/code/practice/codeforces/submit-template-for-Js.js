// REFERENCE: https://codeforces.com/blog/entry/10594
//            https://github.com/radioaktive/codeforces-nodejs-js-solutions/tree/master/1092-B-Teams-forming-nodejs-mocha-tests
//            https://github.com/MikeMirzayanov/binary-heap-benchmark/blob/master/javascript/heap.js
//            https://github.com/aedorado/cf-heatmap

// Insert some global variables for testing
var N = 1000;
var h = new Array(N);

// Insert some micellaneous functions here
function addSpaceByIndex(inputStr, index){
    const space = " ";
    let OriginalStr = inputStr;
    let slicedEnd = inputStr.slice(index-1);
    let slicedStart = OriginalStr.replace(slicedEnd,"");
    let ConcatenatedArray = [slicedStart,space,slicedEnd];

    return ConcatenatedArray.join('');

}

function determineBinaryOperatorIndex(badcode){
    let reg = /\*|\+|\-|\//g;
    let matchResults = [...badcode.matchAll(reg)];
    let matchedIndexes = [];
    for(i in matchResults){
        matchedIndexes.push(matchResults[i].index);
    }
    return matchedIndexes;
}

function addSpace(badcode, indexArr){
    console.log(badcode);
    for(i in indexArr){
        console.log(indexArr[i]);
        let firstProcessedCode = addSpaceByIndex(badcode,indexArr[i] + 1 + 2 * i);
        console.log(badcode);
        badcode = addSpaceByIndex(firstProcessedCode, indexArr[i] + 3 + 2 * i);
        console.log(badcode);
    }
    let goodcode = badcode;
    return goodcode;
}

function bad2good( badcode ){
    return addSpace(badcode, determineBinaryOperatorIndex(badcode));
}

