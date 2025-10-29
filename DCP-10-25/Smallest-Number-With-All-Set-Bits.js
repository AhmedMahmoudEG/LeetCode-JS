/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
    let x = 1;
    while ((1 << x) - 1 < n) {
        x++;
    }
    return (1 << x) - 1;
};