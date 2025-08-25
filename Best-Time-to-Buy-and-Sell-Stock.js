/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let buy=prices[0];
    for(let i =0;i<prices.length;i++){
        buy = Math.min(buy,prices[i])
        max = Math.max(prices[i]-buy,max)
    }
    return max
};