/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let res=0
    for(let i of operations){
        if(i=="--X"||i=="X--") res--
        else res++
    }
    return res
};