/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let res =[];
    for (let i = 0; i <= rowIndex; i++){
        const row= [1]
        for(let j=1;j<i;j++){
            row[j]=res[i-1][j-1] + res[i-1][j]
        }
        if (i > 0) row.push(1);
        res.push(row);
    }
    return res[rowIndex]
};