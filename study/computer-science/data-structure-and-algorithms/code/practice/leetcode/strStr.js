/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle == "" || haystack == needle) return 0;
    let match = new RegExp(needle);
    let result = match.exec(haystack);
    return result ? result.index : -1 ;
};