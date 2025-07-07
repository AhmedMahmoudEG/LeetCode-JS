/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [];

    function dfs(index, current, total) {
        // Base case: found a combination
        if (total === target) {
            res.push([...current]); // copy current path
            return;
        }

        // Base case: over target or out of bounds
        if (total > target || index >= candidates.length) {
            return;
        }

        // Include current number (can reuse it)
        current.push(candidates[index]);
        dfs(index, current, total + candidates[index]); // reuse allowed, so same index
        current.pop();

        // Exclude current number and move to next
        dfs(index + 1, current, total); // move to next index
    }

    dfs(0, [], 0);
    return res;
};