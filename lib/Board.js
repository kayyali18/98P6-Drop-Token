const Player = require("./Player");

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
    this.puttedColumns = [];

    this.players = [new Player(1), new Player(2)];
  }

  display() {
    this.rows.forEach(row => console.log("| ", ...row));
    this.separator.forEach(item => console.log(...item));
  }

  put(column) {
    const col = column - 1;
    const player = this.player;
    let row = 3;

    // Shallow copies of state to avoid direct mutation
    let grid = this.rows;

    // while (row > 0) {
    //   if (grid[row][col] == 0) {
    //     grid[row][col] = player;
    //     this.updateColumns(column);

    //     // break condition
    //     row = -1;
    //   }

    //   this.rows = grid;

    //   row--;
    // }
  }

  get() {
    this.puttedColumns.forEach(col => console.log(col));
  }

  switchPlayer() {
    if ((this.player = 1)) this.player = 2;
    else this.player = 1;
  }

  updateColumns(col) {
    let putCol = this.puttedColumns;

    putCol.push(col);
    this.puttedColumns = putCol;
  }
};
