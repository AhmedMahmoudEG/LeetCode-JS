/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    
    let set = new Set();
    let count = 0;

    for (let char of s) {
        if (set.has(char)) {
            set.delete(char);  // got a pair
            count += 2;
        } else {
            set.add(char);
        }
    }

    // if there's at least one unmatched character, we can place it in the center
    if (set.size > 0) count += 1;

    return count;
};