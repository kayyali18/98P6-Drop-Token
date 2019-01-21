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

  // Logs to the console each players current columns occupied
  get() {
    this.tokens.forEach(token => console.log(token.col + 1));
  }

  // Call the 3 individual methods for checking wins
  checkWin(grid) {
    const horizon = this.checkHorizontal(grid);
    const vertical = this.checkVertical(grid);
    const diagonal = this.checkDiagonal(grid);

    // Returns true or false
    return diagonal || vertical || horizon;
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

  // Checks for win vertically
  checkVertical(grid) {
    // Loop through each columns
    for (let col of this.columns) {
      // Initialise winning streak counter
      let streak = 0;

      // Loop through each row
      for (let row of this.rows) {
        if (grid[row][col] == this.number) streak++;

        // Check for 4 Point streak
        if (streak == 4) return true;
      }
    }

    return false;
  }

  // Calls functions to check if winner
  checkDiagonal(grid) {
    // Check down-right
    const downRight = this.checkLine(grid, "right");

    // Check down-left
    const downLeft = this.checkLine(grid, "left");

    return downRight || downLeft;
  }

  // Checks lines diagonally
  checkLine(grid, dx) {
    let streak = 0;

    // Check respective direction
    if (dx == "left") {
      // Start at last column
      let col = 3;

      for (let row of this.rows) {
        if (grid[row][col] == this.number) streak++;

        col--;
      }
    } else {
      let col = 0;

      for (let row of this.rows) {
        if (grid[row][col] == this.number) streak++;

        col++;
      }
    }

    if (streak == 4) return true;
    return false;
  }
};
