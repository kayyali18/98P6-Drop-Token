const Player = require("./Player");

module.exports = class Board {
  constructor() {
    this.rows = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    this.separator = ["+--------", " 1234"];
    this.gameOver = false;
    this.player = 0;
    this.puttedColumns = [];

    this.players = [new Player(1), new Player(2)];
  }

  // Displays the board when BOARD is called
  display() {
    this.rows.forEach(row => console.log("| ", ...row));
    this.separator.forEach(item => console.log(...item));
  }

  // Puts new token into grid if possible
  put(column) {
    const col = column - 1;
    const row = this.puttedColumns.filter(el => el == column).length;
    const indexRow = 3 - row;

    let win;
    let player = this.players[this.player];

    // Shallow copies of state to avoid direct mutation
    let grid = this.rows;

    // Check that spot is valid
    const valid = this.checkSpot(indexRow, col);

    if (valid) {
      // Update grid
      grid[indexRow][col] = player.number;
      this.rows = grid;

      // Update player stats
      player.addToken(indexRow, col);
      this.updateColumns(column);

      // Check for player win
      win = player.checkWin(grid);

      if (win) console.log(`\nPlayer ${player.number} wins!!`);
      else console.log("\nOK");

      // Switch current player
      this.switchPlayer();
    } else {
      this.errorMsg(column);
    }

    // End game if player wins
    if (win) this.endGame();
  }

  // Gets all columns putted to by calling each Player's get method
  get() {
    this.players.forEach(player => player.get());
  }

  switchPlayer() {
    // Shallow copies of state to avoid direct mutation
    let player = this.player;

    if (player === 0) player = 1;
    else player = 0;

    // Update state
    this.player = player;
  }

  updateColumns(col) {
    // Shallow copies of state to avoid direct mutation
    let putCol = this.puttedColumns;

    putCol.push(col);

    // Update state
    this.puttedColumns = putCol;
  }

  // Checks to see if spot is occupied
  checkSpot(row, col) {
    let grid = this.rows;

    // Handles property undefined error
    if (row == -1) row = 0;

    if (grid[row][col] == 0) return true;
    return false;
  }

  // Determines which error message to print
  errorMsg(col) {
    if (col < 1 || col > 4)
      console.log(`\nPlease PUT between 1 - 4 -- You entered ${col}`);
    else console.log(`\nColumn: ${col} is currently full. Please try again`);
  }

  endGame() {
    this.gameOver = true;
  }
};
