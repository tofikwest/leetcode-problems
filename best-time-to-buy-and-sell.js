/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length < 2) return 0;
  let minPrice = prices[0],
    maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) minPrice = prices[i];
    else maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }

  return maxProfit;
};
