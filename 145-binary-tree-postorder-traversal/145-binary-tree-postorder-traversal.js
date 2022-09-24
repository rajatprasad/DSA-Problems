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
var postorderTraversal = function(root) {
    let res = [];
    
    function postOrder(root) {
        if(!root)
            return null;
        
        if(root.left) postOrder(root.left);
        if(root.right) postOrder(root.right);
        res.push(root.val);
    }
    
    postOrder(root);
    return res;
};