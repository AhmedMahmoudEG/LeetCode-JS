/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let roman = {"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000}
    let res = 0
    for(let i=0;i<s.length;i++){
        let current = roman[s[i]];
        let next = roman[s[i+1]] || 0 
        if(current < next) {
            res -=current
        }else{
            res +=current
        }
    }
    return res
};