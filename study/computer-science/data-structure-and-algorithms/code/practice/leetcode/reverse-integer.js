// https://leetcode.com/problems/reverse-integer/discuss/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const overflow = 2147483648;
    const isOverflow = num => num < (-1 * overflow) || num > (overflow - 1);
    if(x === 0 || isOverflow(x)) return 0;
    while(x % 10 == 0){
        x /= 10;
    }
    let isNegative = x > 0 ? false : true;
    let reverse = parseInt(Math.abs(x)
                           .toString()
                           .split("")
                           .reverse()
                           .join(""));
    
    return isOverflow(reverse) ? 0 : isNegative ? (-1)*reverse : reverse;
};