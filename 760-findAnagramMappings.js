/*
given:
A = [12, 28, 46, 32, 50]
B = [50, 12, 32, 46, 28]
We should return
[1, 4, 3, 2, 0]

*/

var anagramMappings = function(A, B) {
  let P = [];
  let map = {};

  for (let i = 0; i < A.length; i++) {
    map[B[i]] = i;
  }

  for (let val of A) {
    P.push(map[val]);
  }
  return P;
}

let A = [12, 28, 46, 32, 50];
let B = [50, 12, 32, 46, 28];

