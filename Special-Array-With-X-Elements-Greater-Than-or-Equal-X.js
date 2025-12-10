1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var specialArray = function(nums) {
6    nums.sort((a,b)=>a-b)
7
8    let n = nums.length;
9    for(let i =0;i<nums.length;i++){
10        let x = n-i
11        
12        if (
13            nums[i] >= x &&
14            (i === 0 || nums[i - 1] < x)
15        ) {
16            return x;
17        }
18    }
19    
20    return -1
21};