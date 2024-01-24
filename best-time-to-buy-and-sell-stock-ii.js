/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0],
    all_profits = 0;

  for (let i = 1; i <= prices.length; i++) {
    const current_stock = prices[i];

    if (current_stock < min) {
      min = current_stock;
    } else {
      const possible_profit = current_stock - min;
      if (possible_profit > 0) {
        all_profits += possible_profit;
        min = current_stock;
      }
    }
  }

  return all_profits;
};
