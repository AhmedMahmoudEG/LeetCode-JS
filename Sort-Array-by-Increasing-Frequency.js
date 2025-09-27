/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let map = new Map();
    for(let n of nums){
        map.set(n,(map.get(n)||0 )+1)
    }
    
    nums.sort((a, b) => {
        let freqA = map.get(a);
        let freqB = map.get(b);
        if (freqA === freqB) {
            return b - a; // higher value first if frequency is same
        }
        return freqA - freqB; // lower frequency first
    });

    return nums;

    /*
    let sortedKeys = [...map.entries()].sort((a,b)=>{
        if (a[1] === b[1]) return b[0] - a[0]; // tie -> key DESC
    return a[1] - b[1]; // otherwise freq ASC
    }).flatMap(([key, freq]) => Array(freq).fill(key));
  return sortedKeys
  */
};