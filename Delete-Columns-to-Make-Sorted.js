1/**
2 * @param {string[]} strs
3 * @return {number}
4 */
5var minDeletionSize = function(strs) {
6    let count = 0;
7    let rows = strs.length;
8    let cols = strs[0].length;
9
10    for (let c = 0; c < cols; c++) {
11        for (let r = 1; r < rows; r++) {
12            if (strs[r][c] < strs[r - 1][c]) {
13                count++;
14                break; // العمود ده يتحذف وخلاص
15            }
16        }
17    }
18    return count;
19};