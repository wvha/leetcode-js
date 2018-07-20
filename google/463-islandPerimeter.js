/**
 * @param {number[][]} grid
 * @return {number}
 */


 /*
thoughts:
however many adjacent 1's there are will give the perimeter
1 connection = 3 perimeter units
2 connection = 2 perimeter units
3 connection = 1 perimeter units
4 = 0

have var sum and add
if grid[i-1] exists && grid[i-1][j] ... !== 1, then plus??


 */

var islandPerimeter = function(grid) {
  let sum = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        if (grid[i][j-1] !== 1) {
          sum++;
        }
        if (grid[i][j+1] !== 1) {
          sum++;
        }
        if ((grid[i-1] && grid[i-1][j]) !== 1) {
          sum++;
        }
        if ((grid[i+1] && grid[i+1][j]) !== 1) {
          sum++;
        }
      }
    }
  }
  return sum;
};