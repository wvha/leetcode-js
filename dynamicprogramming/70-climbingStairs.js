/**
 * @param {number} n steps to reach top
 * @return {number}
 */
var climbStairs = function(n) {
  let count = 0;

  let prev = 1;
  let curr = 1;

  for (let i = 1; i < n; i++) {
    [prev, curr] = [curr, prev + curr]
  }
  return curr;

};

/*

dynamic programming says:
  one can reach ith step in one of two ways
  1. taking a single step from (i-1)th step
  2. taking a step of 2 from (i-2)th step

so total number of ways to reach ith is equal to sum of
  (i-1)th step and
  (i-2)th step

*/