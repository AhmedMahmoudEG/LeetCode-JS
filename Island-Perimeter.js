1/**
2 * @param {number[][]} grid
3 * @return {number}
4 */
5var islandPerimeter = function(grid) {
6    let count =0
7    for(let i =0;i<grid.length;i++){
8        for(let j=0;j<grid[0].length;j++){
9            if(grid[i][j]==1) 
10            {
11
12            count+=4
13            // لو في أرض على اليمين
14            if (j + 1 < grid[0].length && grid[i][j + 1] === 1)
15            {
16
17                    count -= 2;
18            }
19            if(i+1 <grid.length&&grid[i+1][j]===1){
20
21                count -=2
22            }
23            }
24        }
25    }
26    return count
27
28};