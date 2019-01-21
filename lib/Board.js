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
    this.player = 1;
  }

  display() {
    this.rows.forEach(row => console.log("| ", ...row));
    this.separator.forEach(item => console.log(...item));
  }

  put(column) {
    const col = column - 1;
    const player = this.player;
    let grid = this.rows;
    let row = 3;

    while (row > 0) {
      if (grid[row][col] == 0) {
        grid[row][col] = player;
        row = -1;
      }

      this.rows = grid;

      row--;
    }
  }

  switchPlayer() {
    if ((this.player = 1)) this.player = 2;
    else this.player = 1;
  }
};
