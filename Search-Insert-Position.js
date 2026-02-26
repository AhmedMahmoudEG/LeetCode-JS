1/**
2 * @param {number[]} nums
3 * @param {number} target
4 * @return {number}
5 */
6var searchInsert = function(nums, target) {
7    let low = 0;
8    let high = nums.length-1
9    while(low<=high){
10        let mid  = Math.floor((low+high)/2)
11        if(nums[mid]>target){
12            high = mid -1
13        }else if(nums[mid]<target){
14
15            low  = mid +1
16        }else{
17            return mid
18        }
19    }
20    return low
21};