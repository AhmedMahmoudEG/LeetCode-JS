/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let freq = new Set(); //o(n) space
    let map = new Map() //o(n) space
    for(let num of arr){
        map.set(num, (map.get(num) || 0) +1)
    }
    for([key,value] of map.entries()){
        if(freq.has(value)){
            return false
        }
        else {
        freq.add(value)
        }
    }
    return true
};