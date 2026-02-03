1/**
2 * @param {number[]} nums
3 * @return {boolean}
4 */
5var isTrionic = function(nums) {
6const n = nums.length;
7if(n<3) return false
8    let p =0
9    while(p<n-1 && nums[p]<nums[p+1]){
10        p++
11    }
12    if(p==0||p>=n-2) return false
13    let q = p
14    while(q<n-1&&nums[q]>nums[q+1]){
15        q++
16    }
17    if(q==p||q>=n-1) return false
18    for(let i = q; i < n - 1; i++) {
19        if(nums[i] >= nums[i + 1]) {  
20            return false;
21        }
22    }
23    
24    return true;
25};