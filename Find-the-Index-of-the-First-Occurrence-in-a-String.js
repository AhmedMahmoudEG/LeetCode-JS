1/**
2 * @param {string} haystack
3 * @param {string} needle
4 * @return {number}
5 */
6var strStr = function(haystack, needle) {
7
8    let n = haystack.length
9    for(let i =0;i<=n-needle.length;i++){
10         if (haystack.slice(i, i + needle.length) === needle) {
11            return i;
12        }
13    }
14    return -1
15};