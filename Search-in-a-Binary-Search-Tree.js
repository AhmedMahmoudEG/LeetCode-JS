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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    //base cases
    if(!root) return null
    if(root.val==val) return root

    //recursive by applying BS val>mid goes right else goes left
    if(root.val<val)return searchBST(root.right,val)
    return searchBST(root.left,val)

};