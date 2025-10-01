/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    /*
    let res =[]
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            res.push(matrix[i][j])
        }
    }
    console.log(res)
    return res
    */
    //rows
    let top =0
    let bottom = matrix.length-1;
    //column
    let left =0;
    let right = matrix[0].length-1;
    let res = []
    while(top <= bottom && left <= right){
        // 1. Traverse from left → right across the top row
        for(let j=left;j<=right;j++){
            res.push(matrix[top][j])
        }
        top++; // move right boundary left
         // 2. Traverse from top → bottom along the right column
        
        for(let i=top;i<=bottom;i++){
            res.push(matrix[i][right])
        }
        right--
        // 3. Traverse from right → left across the bottom row
        if(top<=bottom){
            for(let j=right;j>=left;j--){
                res.push(matrix[bottom][j])
            }
            bottom--; // move bottom boundary up
        }
         // 4. Traverse from bottom → top along the left column
         if (left <= right) {  // check again
         for (let i = bottom; i >= top; i--) {
      res.push(matrix[i][left]);
    }
    left++; // move left boundary right
  }
    }
    return res
};