/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  // return s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '') == s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').split('').reverse().join('')
    let cleanedStr = s.toLowerCase().replace(/[^a-zA-Z0-9]/g,'')
    let l=0;
    let r=cleanedStr.length-1
    while(l<r){
        if(cleanedStr[l]!=cleanedStr[r]) return false
        l++
        r--
    }
    return true
};