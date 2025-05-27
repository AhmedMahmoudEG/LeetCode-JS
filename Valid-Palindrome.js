/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.toLowerCase();
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '');
    let start = 0;
    let end = cleanStr.length-1
    while(start<end){
        if(cleanStr[start]!==cleanStr[end]){
            return false
        }
            end--;
            start++;
    }
    return true;
};