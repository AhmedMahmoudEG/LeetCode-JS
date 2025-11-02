/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let map = new Map();
    for(let ch of s){
        map.set(ch,(map.get(ch)||0 )+1)
    }

    /*
    let maxFreq = Math.max(...map.values())
    for(let [key,value] of map.entries()){
        if(value!=maxFreq) return false
    }
    return true
    */
    
    const freqs =  Array.from(map.values())
    return !freqs.some(count => count !== freqs[0])
    
};