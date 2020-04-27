let array = [2,3,4,5,6];
let hourglassModel = [
    [0,0],
    [0,1],
    [0,2],
    [1,1],
    [2,0],
    [2,1],
    [2,2]
];



let results = array.reduce((accumulator, currentValue, currentIndex, chosenArray) => {
    console.log(`ACC = ${accumulator}, CV = ${currentValue}, CI = ${currentIndex}`);
    console.log('Output chosen Array');
    console.log(chosenArray);  
    return accumulator + currentValue;
})

let transformedHourglass = hourglassModel.slice();
transformedHourglass.forEach((crv1) =>{ // this forEach part returns undefined
    crv1.forEach((crv2, cri2) => {
        console.log('Original coordinate');
        console.log(crv1);
        if(cri2 === 0){
            crv1[cri2] += 1 ;
            console.log('Performed X shift');
            console.log('transformed coordinate');
            console.log(crv1);
            return;
        }
        else if(cri2 === 1){
            crv1[cri2] += 2;
            console.log('Performed Y shift');
            console.log('transformed coordinate');
            console.log(crv1);
            return;
        }
        console.log('ERROR');
        console.log(crv1);
    })

    return;
})

console.log('Display transformed array');
console.log(transformedHourglass);

// Test 2

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

let a = [[1,2,3,5],[2,3,45,4],[2,3,4,5],[2,1,3,4]];
sweep(a);