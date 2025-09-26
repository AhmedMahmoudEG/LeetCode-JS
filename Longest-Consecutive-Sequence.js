/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    /*
    //nlogn solution by using sorting 
    //then calculate the longest sequence if(n+1)==nums[i+1]
    nums.sort((a,b)=>a-b)
    let longest =0
    let length=1
    for(let i=0;i<nums.length;i++){
        if (nums[i] === nums[i+1]) {
        continue  // skip duplicates
    } else if (nums[i] + 1 === nums[i+1]) {
        length++
    } else {
        length = 1  // reset if sequence breaks
    }
    longest = Math.max(longest, length)
    }
    return longest
    */
    //O(n) by using map and check if n-1 isn't exist
    //mean it's a start of sequence and start to calc length
    let set= new Set(nums);
    let longest =0;
    
    for(let n of set){
        if(!set.has(n-1)){
            let length =1
            while( set.has(n+ length)){
                length++;
            }
        longest = Math.max(length,longest)
        }
    }
    return longest
    
};