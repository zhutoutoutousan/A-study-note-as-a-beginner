// https://leetcode.com/problems/palindrome-number/submissions/
/**
 * @param {number} x
 * @return {boolean}
 * @description  One good way is to compare both sides
 */
var isPalindrome = function(x) {
    if(x === 0) return true;
    const notNegative = num => num > 0 ? true : false;
    const isPalindrome = num => num === parseInt(num.toString().split('').reverse().join(''))
    return notNegative(x) && isPalindrome(x);
};

