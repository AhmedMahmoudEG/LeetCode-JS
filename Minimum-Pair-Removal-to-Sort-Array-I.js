1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var minimumPairRemoval = function(nums) {
6    function isNonDecreasing(nums) {
7        for (let i = 1; i < nums.length; i++) {
8            if (nums[i] < nums[i - 1]) {
9                return false;
10            }
11        }
12        return true;
13    }
14
15    let ops =0;
16    while(!isNonDecreasing(nums)){
17        // 1️⃣ Find index of adjacent pair with minimum sum
18        let minSum = Infinity;
19        let minIndex = 0;
20
21        for (let i = 0; i < nums.length - 1; i++) {
22            let sum = nums[i] + nums[i + 1];
23            if (sum < minSum) {
24                minSum = sum;
25                minIndex = i;
26            }
27        }
28
29        // 2️⃣ Merge that pair
30        let newNums = [];
31        for (let i = 0; i < nums.length; i++) {
32            if (i === minIndex) {
33                newNums.push(nums[i] + nums[i + 1]);
34                i++; // skip next element
35            } else {
36                newNums.push(nums[i]);
37            }
38        }
39
40        // 3️⃣ Update array and count operation
41        nums = newNums;
42        ops++;
43    }
44    return ops
45}
46