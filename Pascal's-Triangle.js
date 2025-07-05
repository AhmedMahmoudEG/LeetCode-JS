/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows==1) return [[1]]
    let res=[];
    res[0] = [1];
    res[1] = [1,1]
    for(let i=2;i<numRows;i++){
        res[i] = Array(i + 1).fill(1);
        for (let j = 1; j < i; j++) {
        res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
         }
    }
    console.log(res)
    return res;
};