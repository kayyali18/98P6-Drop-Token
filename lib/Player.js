module.exports = class Player {
  constructor(playerNum) {
    this.number = playerNum;

    this.tokens = [];
    this.columns = [0, 1, 2, 3];
    this.rows = [0, 1, 2, 3];
  }

  addToken(row, col) {
    const location = { row, col };
    let tokens = this.tokens;

    // Add new token location to shallow copy
    tokens.push(location);

    // Overwrite original state
    this.tokens = tokens;
  }

  // GET method for player
  get() {
    this.tokens.forEach(token => console.log(token.col + 1));
  }

  // Call the 3 individual methods for checking wins
  checkWin(grid) {
    const horizon = this.checkHorizontal(grid);

    return horizon;
  }

  // Checks for a win horizontally
  checkHorizontal(grid) {
    // Loop through each row
    for (let row of this.rows) {
      // Initialise winning streak counter
      let streak = 0;

      // Loop through each column
      for (let col of this.columns) {
        if (grid[row][col] == this.number) streak++;

        // Check for 4 Point streak
        if (streak == 4) return true;
      }
    }

    return false;
  }
};
