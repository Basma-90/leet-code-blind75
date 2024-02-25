/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const visited = new Set();
    let count = 0;

    const explore = (r, c) => {
        if (r < 0 || r >= grid.length || c < 0 || c >= grid[r].length || visited.has(`${r}-${c}`) || grid[r][c] === '0') {
            return;
        }

        visited.add(`${r}-${c}`);

        explore(r, c - 1); // Explore left
        explore(r, c + 1); // Explore right
        explore(r - 1, c); // Explore up
        explore(r + 1, c); // Explore down
    };

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            if (!visited.has(`${r}-${c}`) && grid[r][c] === '1') {
                count++;
                explore(r, c);
            }
        }
    }

    return count;
};
