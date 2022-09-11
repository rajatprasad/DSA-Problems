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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let res = [];
    
    recursion(root, 0);
    
    return res;
    
    function recursion(root, level) {
        if(!root) return;
        if(res.length == level) res.push(root.val);
        recursion(root.right, level+1);
        recursion(root.left, level+1);
    }
    
};