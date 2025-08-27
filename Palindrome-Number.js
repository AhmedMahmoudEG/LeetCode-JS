/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let xStr = x.toString();
    let r=0;
    let l= xStr.length-1;

    while(r<=l){
        
        if(xStr[r]!==xStr[l]) return false
        r++;
        l--
    }
    return true
};