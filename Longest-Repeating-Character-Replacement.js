/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let map={};
    let left =0;
    let right=0;
    let longest =0;
    let maxFreq= 0;
    while(right < s.length){
        let char = s[right];
        map[char]= (map[char] || 0 ) + 1 ;
        maxFreq = Math.max(maxFreq,map[char])

        if((right-left +1 )- maxFreq > k){
            map[s[left]]--;
            left++
        }
        longest = Math.max(longest,right-left+1);
        right++;
    }
    return longest
};