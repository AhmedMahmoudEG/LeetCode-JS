1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var minimumCost = function(nums) {
6    let cost = nums[0];
7    let x = nums[1]
8    let smallest = nums[2]
9    if(x>smallest){
10        let tmp = smallest
11        smallest = x 
12        x = tmp
13    }
14    for(let i =3;i<nums.length;i++){
15      if(x>=nums[i]){
16        smallest = x 
17        x = nums[i]
18      }else if(x <nums[i]&& smallest>=nums[i]){
19        smallest = nums[i]
20      }
21    }
22
23    return cost + x + smallest
24};