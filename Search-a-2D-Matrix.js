/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    //consider the matrix as 1d array
    let left =0;
    //right or high = m * n -1 
    let right = (matrix.length*matrix[0].length) -1
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        //row = Math.floor(mid / n) -- n is #columns
        let row = Math.floor(mid/matrix[0].length)
        //col = Math.floor(mid %n)
        let col = Math.floor(mid%matrix[0].length)
        if(target ===matrix[row][col]){
            return true
        }else if(target>matrix[row][col]){
            left = mid+1
        }else{
            right = mid-1
        }

    }
    return false
};