/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    let minLen = Infinity;
    for(let word of strs){
        minLen = Math.min(minLen,word.length)
    }
    let i=0;
    while(i<=minLen){
        for(let word of strs){
            if(word[i] !=strs[0][i]) {return word.slice(0,i)}
        }
        i++
    }
    return strs[0].slice(0,i)
};