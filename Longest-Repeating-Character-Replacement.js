/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left=0;
    let right=0;
    let maxFreq=0;
    let longest=0;
    let map = new Map()
    while(right<s.length){
        map.set(s[right],(map.get(s[right])||0) +1)
        maxFreq= Math.max(maxFreq,map.get(s[right]))
        if((right-left +1 )- maxFreq > k){
            map.set(s[left],map.get(s[left])-1)
            left++
        }
        longest = Math.max(longest,right-left+1);
        right++;
    }
    return longest
};