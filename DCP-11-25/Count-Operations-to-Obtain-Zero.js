/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function(num1, num2) {
    let ops=0
    while((num1!==0 )&& (num2!==0)){
        if(num1>=num2) {
            ops += Math.floor(num1 / num2); // how many subtractions happen
            num1 = num1 % num2; // remainder after subtracting many times
        } else {
            ops += Math.floor(num2 / num1);
            num2 = num2 % num1;
        }
    }
    return ops
};