// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const generateCoors = (nums) => {
        let Coors = [];
        for(let i = 0; i <= nums.length; i++ ){
            for(let j = i + 1; j <= nums.length; j++){
                Coors.push([i,j]);
            }          
        }
        return Coors;
    }
    let considering = nums.filter( el => el <= target );
    console.log(considering)
    console.log(generateCoors(considering))
    return generateCoors(considering).filter( el => considering[el[0]] + considering[el[1]] === target);
};

// test
console.log(twoSum([2,7,11,15],9));