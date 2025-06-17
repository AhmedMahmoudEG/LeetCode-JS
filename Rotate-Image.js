/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length;
    //the idea first transpose the matrix 
    /*
        1 2 3               1 4 7
        4 5 6       to      2 5 8
        7 8 9               3 6 9
    */
    for(let i =0;i<n;i++){
        for(let j =i ;j<n;j++){
            let temp = matrix[i][j]
            matrix[i][j]=matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    //then swap the first column with last column
    /*
        1 4 7       7 4 1
        2 5 8   to  8 5 2
        3 6 9       9 6 3
    */
     for(let i=0;i<n;i++){
            for(let j = 0;j<(n/2);j++){
                let  temp = matrix[i][j]
                matrix[i][j] = matrix[i][n-1-j]
                matrix[i][n-1-j] = temp;
            }
        }
    console.log(matrix)
};