/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
    let map = new Map();
    // Step 1: Count character frequencies
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }

    let maxDiff = -Infinity;

    const freqEntries = [...map.entries()];
    for (let [char1, freq1] of freqEntries) {
        if (freq1 % 2 !== 0) { // odd frequency
            for (let [char2, freq2] of freqEntries) {
                if (freq2 % 2 === 0) { // even frequency
                    maxDiff = Math.max(maxDiff, freq1 - freq2);
                }
            }
        }
    }

    return maxDiff;
};