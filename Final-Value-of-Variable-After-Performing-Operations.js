/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(ops) {
    let x =0;
    const obj={"--X":-1,"X--":-1,"X++":1,"++X":1};
    for(let op of ops){
        x +=obj[op]
    }
    return x
};