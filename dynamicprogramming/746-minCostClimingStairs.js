var minCostClimbingStairs = function(cost) {
  let n = cost.length;
  let minCost = cost;

  for (let i = 2; i < n; i++) {
    minCost[i] += Math.min(minCost[i-1], minCost[i-2]);
  }
  return Math.min(minCost[n-1], minCost[n-2]);
}
