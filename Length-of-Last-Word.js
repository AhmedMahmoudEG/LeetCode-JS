/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    let words = s.trim().split(' ').filter(word=>word.length>0)
  
    if(words.length ===0) return 0 
    return words[words.length-1].length;
};