/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return (n > 0) && (n & (n - 1)) == 0
   // if(n>0 && n !=1) return false
};