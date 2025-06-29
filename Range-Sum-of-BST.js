/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let total =0
    if(!root) return 0
    if(root.val >= low && root.val <= high) total +=root.val
    if(root.val>low) total+= rangeSumBST(root.left,low,high)
    if(root.val<high) total+= rangeSumBST(root.right,low,high)
    return total
};