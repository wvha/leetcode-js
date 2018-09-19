var maxProfit = function(prices) {
    let minPrice = prices[0];
    let maxProfit = prices[1] - prices[0];

    for (let i = 1; i < prices.length; i++) {
        let currentPrice = prices[i];
        let profit = currentPrice - minPrice;
        maxProfit = Math.max(maxProfit, profit);
        minPrice = Math.min(minPrice, currentPrice);
    }
    return maxProfit;
};

/*
using greedy approach,
initiate minPrice and maxProfit
at each step in the loop, check for new maxProfit and new minPrice

return at the end
*/