/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    //base case when we will stop ? 
    //if the nums.length ==0 the return null
    if(nums.length ==0) return null
    //else ? doing the binary search by calc the mid and assign it to the root 
    //when you build the tree
    let left = 0;
    let right = nums.length -1;
    let mid = Math.floor((right + left )/2)
    let root = new TreeNode(nums[mid])
    //then recursivly call the left and the right with the 2 halfs
    root.left = sortedArrayToBST(nums.slice(0,mid))
    root.right = sortedArrayToBST(nums.slice(mid+1))
    return root;
};