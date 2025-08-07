/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // If either binary string is longer than 52 bits,
    // use BigInt to safely handle large binary numbers
    if (a.length > 52 || b.length > 52)
        return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2);
    else
        // For shorter binary strings, it's safe to use parseInt (base 2)
        return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
};