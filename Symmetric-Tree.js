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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root) return true
    //helper function to check each side is the same 
    //same answer of same tree problem but compare the mirror nodes 
    // t1.left with t2.right and t1.right with t2.left
    function isMirror(t1,t2){
        if(!t1&&!t2) return true
        if(!t1||!t2) return false
        if (t1.val !== t2.val) return false;

        //recall
        return isMirror(t1.left,t2.right)&&isMirror(t1.right,t2.left)

    }
        return isMirror(root.left,root.right)
};