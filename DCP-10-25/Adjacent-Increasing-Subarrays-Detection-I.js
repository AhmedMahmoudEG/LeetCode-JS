/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasIncreasingSubarrays = function(nums, k) {
   const n = nums.length;

    // helper function to check if subarray is strictly increasing
    function isIncreasing(start) {
        for (let i = start + 1; i < start + k; i++) {
            if (nums[i] <= nums[i - 1]) return false;
        }
        return true;
    }

    // check each possible adjacent subarray pair
    for (let i = 0; i + 2 * k <= n; i++) {
        if (isIncreasing(i) && isIncreasing(i + k)) {
            return true;
        }
    }

    return false;
};