/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map() //space o(n)
    for(let i =0;i<nums.length;i++){ //time O(n)
        let subtract = target - nums[i];
        if(map.has(subtract)){
            return[map.get(subtract),i]
        }
            map.set(nums[i],i);
    }
        return [];
    
    /*
    const res=[];
    for(let i =0; i<nums.length;i++){
        for(let j =i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                res.push(i);
                res.push(j)
            }
        }
    }
    return res;
    //time O(n^2)
    //space O(1);
    */
};