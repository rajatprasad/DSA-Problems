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
var preorderTraversal = function(root) {
    let res = [];
    
    function preOrder(root) {
        if(!root)
            return null;
        
        
        res.push(root.val);
        if(root.left) preOrder(root.left);
        if(root.right) preOrder(root.right);
        
    }
    
    preOrder(root);
    return res;
};