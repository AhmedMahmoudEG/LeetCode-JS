/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    //time O(n*2^n)
    let res = [[]]
    function dfs(index,current){
        for(let i =index;i<nums.length;i++){
            current.push(nums[i])
            res.push([...current])
            dfs(i+1,current)
            current.pop()
        }
    }
    dfs(0,[])
    return res
    
};