module.exports = class Board {
  constructor() {
    this.rows = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    this.separator = ["+--------", " 1234"];
    this.gameOver = false;
  }

  display() {
    this.rows.forEach(row => console.log("| ", ...row));
    this.separator.forEach(item => console.log(...item));
  }

  put(column) {
    const col = column - 1;
    let grid = this.rows;
    let row = 3;

    while (row > 0) {
      if (grid[row][col] == 0) {
        grid[row][col] = "player";
        row = -1;
      }

      this.rows = grid;

      row--;
    }
  }
};
