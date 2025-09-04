/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    //The idea is that addition is just XOR + Carry:
    //AND (&) → finds where the carry should happen.
    //Shift left (<<) → move the carry into the next higher bit.
    while(b!==0){
        let carry = (a&b) <<1
        a = a ^ b
        b = carry 
    }
    return a
};