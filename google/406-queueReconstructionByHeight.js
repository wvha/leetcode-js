/**
 * @param {number[][]} people
 * @return {number[][]}

h height
k # of people in front


the k = 0 have first priority
  then h shorter height priority


sort
if different height, greatest to least h height first (999->0)
if same height, least to greatest k people in front (0->999)
[ [ 7, 0 ], [ 7, 1 ], [ 6, 1 ], [ 5, 0 ], [ 5, 2 ], [ 4, 4 ] ]

splice
going through array,
0: pos0 [7,0]
1: pos1 [7,0], [7,1]
2: pos1 [7,0], [6,1], [7,1]
3: pos0 [5,0], [7,0], [6,1], [7,1]
4: pos2 [5,0], [7,0], [5,2], [6,1], [7,1]
5: pos4 [5,0], [7,0], [5,2], [6,1], [4,4], [7,1]

larger k must be sorted last so that there are enough places in front
 */

function sortList(a, b) {
  if (a[0] !== b[0]) {
    return b[0] - a[0];
  } else {
    return a[1] - b[1];
  }
}

var reconstructQueue = function(people) {
  people.sort(sortList);
  let sorted = [];

  for (let i = 0; i < people.length; i++) {
    sorted.splice(people[i][1], 0, people[i]);
  }
  return sorted;
};

