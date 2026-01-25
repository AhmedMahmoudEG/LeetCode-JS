1/**
2 * @param {number[]} nums
3 * @param {number} k
4 * @return {number}
5 */
6var minimumDifference = function(nums, k) {
7    if (k === 1) return 0;
8
9    nums.sort((a, b) => a - b);
10     let minDiff = Infinity;
11
12    for (let i = 0; i + k - 1 < nums.length; i++) {
13        minDiff = Math.min(minDiff, nums[i + k - 1] - nums[i]);
14    }
15
16    return minDiff;
17};