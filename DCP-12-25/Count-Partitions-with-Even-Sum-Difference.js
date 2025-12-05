1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var countPartitions = function(nums) {
6     let total = nums.reduce((a, b) => a + b, 0);
7    let n = nums.length;
8
9    if (total % 2 !== 0) return 0; // odd sum → no valid partitions
10
11    return n - 1; // every partition is valid
12    /*
13    let count=0;
14    let prefix=[]
15    let n= nums.length
16    prefix[0]=nums[0];
17
18    for(let i=1;i<nums.length;i++){
19        prefix[i] =nums[i]+prefix[i-1]
20    }
21    let totalSum = prefix[n-1]
22    for(let i=0;i<nums.length-1;i++){
23        let leftSum  = prefix[i]
24        let rightSum = totalSum - prefix[i]
25        if ((leftSum - rightSum) % 2 == 0) count++
26    }
27    return count
28    */
29};