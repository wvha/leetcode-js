var minCostClimbingStairs = function(cost) {
  let n = cost.length;
  let minCost = cost;

  for (let i = 2; i < n; i++) {
    minCost[i] += Math.min(minCost[i-1], minCost[i-2]);
  }
  return Math.min(minCost[n-1], minCost[n-2]);
}

/*
explanation:
loop through copy of array
at each value, we're adding the Math.min of the two possible steps
at the end, we return the Math.min between the last two items

*/