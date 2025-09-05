/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    /*
    let res = [];
    let i =0;
    while(i<nums.length){
        let start = nums[i]
        while(i<nums.length-1 &&nums[i+1]==nums[i]+1){
            i++
        }
            if(start !=nums[i]){
            res.push(start+"->"+nums[i])
            }else{
                res.push(start.toString())
            }
            i++;
    }
    */
    let res =[]
    for(let i =0;i<nums.length;i++){
        let start= nums[i];
        for(let j =i;j<nums.length-1;j++){
            if(nums[j+1]==nums[j]+1){
                i++;
            } else {
            break; // stop if numbers are not consecutive
        }
        }
                
        if(start!=nums[i]){
            res.push(start +"->"+nums[i])
        }else{
            res.push(start.toString())
        }
    }
    
    return res
};