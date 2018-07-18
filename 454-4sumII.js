/*
Given four lists A, B, C, D of integer values, compute how many tuples (i, j, k, l) there are such that A[i] + B[j] + C[k] + D[l] is zero.

Example:

Input:
A = [ 1, 2]
B = [-2,-1]
C = [-1, 2]
D = [ 0, 2]

Output:
2

Explanation:
The two tuples are:
1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0

the idea is
add possibilities for first two ...
check if possibilities for second two exist in the object already

*/


var fourSumCount = function(A, B, C, D) {
  let map = new Map();
  let sum;
  let count;
  let tuples = 0;

  for (let numA of A) {
    for (let numB of B) {
      sum = numA + numB;
      count = map.get(sum) || 0;
      map.set(sum, count + 1);
    }
  }

  for (let numC of C) {
    for (let numD of D) {
      sum = -numC - numD;
      tuples += map.get(sum) || 0;
    }
  }

  return tuples;
};



var fourSumCount2 = function(A, B, C, D) {
  let left = {};
  let count = 0;
  for (let a of A) {
    for (let b of B) {
      left[a + b] = (left[a + b] || 0) + 1;
    }
  }

  for (let c of C) {
    for (let d of D) {
      count += left[-c-d] || 0;
    }
  } return count;
}




