// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for(const i in nums){
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [i, map.get(complement)]
        }
        map.set(nums[i],i);
    }
};

