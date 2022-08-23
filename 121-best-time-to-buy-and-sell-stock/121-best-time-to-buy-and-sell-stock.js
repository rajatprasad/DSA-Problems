/**
 * @param {number[]} prices
 * @return {number}
 */


var maxProfit = function(prices) {
    let left = 0;
    let right = 1;
    let maxProfit = 0;
    
    while(right < prices.length) {
        if(prices[left] < prices[right]) {
           let profit = prices[right] - prices[left];
            maxProfit = Math.max(maxProfit, profit);
        } else {
            left = right;
        }
        right = right + 1;
    }
    return maxProfit;
}



// var maxProfit = function(prices) {
//     let maxProfit = 0, minSoFar = prices[0];
    
//     for(let i=0; i < prices.length; i++) {
//         minSoFar = Math.min(minSoFar, prices[i]);
//         let profit = prices[i] - minSoFar;
//         maxProfit = Math.max(profit, maxProfit);
//     }
//     return maxProfit
// }



