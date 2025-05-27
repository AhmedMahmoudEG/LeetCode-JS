/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    //O(1) solution using bit minpulation 
    return n>0 && (n &(n-1)) ===0 ;

    //using recursion 
    /*
    if (n === 1) return true;
    if (n <= 0 || n % 2 !== 0) return false;
    return isPowerOfTwo(n / 2);
    */
};