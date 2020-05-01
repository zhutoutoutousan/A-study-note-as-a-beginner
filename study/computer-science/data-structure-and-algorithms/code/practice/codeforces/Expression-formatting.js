// https://codeforces.com/gym/102461/problem/A


// Step 1: Use regular expression to identify the index of the binary operator -->/\*|\-|\+|\//gm
// Step 2: Add space on index-1 and index+1


// This method doesn't work for String.prototype.slice is not found in the prototype chain. Try to figure it out.

// if(!String.prototype.splice){
//     String.prototype.splice = (start, delCount, newSubStr) => {
//         return String.prototype.slice(0,start) + newSubStr + String.prototype.slice(start + Math.abs(delCount));
//     }
// }   


// ok
function addSpaceByIndex(inputStr, index){
    const space = " ";
    let OriginalStr = inputStr;
    let slicedEnd = inputStr.slice(index-1);
    let slicedStart = OriginalStr.replace(slicedEnd,"");
    let ConcatenatedArray = [slicedStart,space,slicedEnd];

    return ConcatenatedArray.join('');

}


// This function input a string of badcode like: "a+b+c/d", then push all indexes in to an array output
// ok
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

// Test output
// var a = addSpace("a+b+c/b*c/d-2", determineBinaryOperatorIndex("a+b+c/b*c/d-2"));
// console.log(a);

function main(){
    
}