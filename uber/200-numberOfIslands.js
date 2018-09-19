/*

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

*/

var numIslands = function(grid) {
  if (grid.length === 0) return 0;

  let rows = grid.length;
  let cols = grid[0].length;
  let islands = 0;

  function visit(r, c) {
    // to mark grid
    grid[r][c] = '0';

    // check each direction
    if ((c + 1 < cols) && (grid[r][c+1] === '1')) {
      visit (r, c+1);
    }
    if ((r + 1 < rows) && (grid[r+1][c] === '1')) {
      visit(r+1, c);
    }

    if ((c > 0) && (grid[r][c-1] === '1')) {
      visit(r, c-1);
    }
    if ((r > 0) && (grid[r-1][c] === '1')) {
      visit (r-1, c);
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === '1') {
        visit(row, col);
        islands += 1;
      }
    }
  }
  return islands;
}

// must check every value in grid
// if current spot is land, you 'visit' it in all directions
// and turn the spot to 0 to know that you've visited it
// after all pieces in that land are checked, you up the islands count