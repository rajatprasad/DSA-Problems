/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    var memo = {}
  var helper = (x) => {
    if(memo[x]) return memo[x]
    if(x==1 || x==0) return x
    return memo[x] = helper(x-1) + helper(x-2)
  }
  return helper(n)
};