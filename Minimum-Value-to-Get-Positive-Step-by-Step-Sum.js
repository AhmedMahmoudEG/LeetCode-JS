1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var minStartValue = function(nums) {
6    let currentSum=0;
7    let min=0
8    for(let i of nums){
9        currentSum +=i
10        min = Math.min(currentSum,min)
11    }
12    if(min>=0) return 1
13     return 1-min
14
15};