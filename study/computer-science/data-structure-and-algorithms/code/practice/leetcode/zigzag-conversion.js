// https://leetcode.com/problems/zigzag-conversion/
// https://github.com/ncpierson/leetcode/blob/master/P06-ZigZagConversion/solution.js
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 * @description Let's look at some examples.
 *              Let's say the n, which is the number of lines equals to 3, then the model is：
 *                                            *     *
 *                                            *  *  *
 *                                            *     *
 *              From here, we can see if n = 3, then the total length l = 3 * 2 + 1 = 7 
 *              If n = 4 then the model is:
 *                                            *       *
 *                                            *    *  *
 *                                            *  *    *
 *                                            *       *
 *              The length l = 4 * 2 + 2 = 10
 *              Hence, we can deduce that if n = k, then l = 2 * k + k - 2 = 3 * k - 2
 *              Also, the increment between the first line of element index is k - 1.
 *              The next line just put one element before the right pillar, then move it one unit leftwards.
 * 
 */
let convert = function(s, numRows) {

    if (numRows === 1) return s;

    let y = 0;
    let isZigging = true;
    const rows  = [...new Array(numRows)].map(_  => []);

    for(let i = 0; i < s.length; i++){
        const char = s[i];

        rows[y].push(char);

        if(y  === numRows  - 1) isZigging =  false;
        if (y ===  0)  isZigging = true;

        y = isZigging ? y + 1 : y - 1;
    }

    return rows.reduce((string, row) => string + row.join(''), '');

};