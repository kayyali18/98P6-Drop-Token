/**
 *  We test our Board Class here
 */

const chai = require("chai");
const expect = chai.expect;
const assert = chai.assert;
const Board = require("../lib/Board.js");

describe("Board", function() {
  let board;

  // Instantiate a new Board
  beforeEach(function() {
    board = new Board();
  });

  it("should instantiate our good friend, the Board", function() {
    assert.isObject(board);
  });

  it("should have the correct default properties", function() {
    const mocks = {
      grid: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      separator: ["+--------", " 1234"],
      gameOver: false,
      player: 0
    };

    expect(board.rows).to.deep.equal(mocks.grid);
    expect(board.separator).to.deep.equal(mocks.separator);
    expect(board.gameOver).to.equal(mocks.gameOver);
    expect(board.player).to.equal(mocks.player);
    expect(board.players.length).to.equal(2);
  });

  it("should put a token to a column", function() {
    // Put a token in the first column
    board.put(1);

    expect(board.rows[3][0]).to.equal(1);
  });

  it("should not switch Players if put is invalid", function() {
    const player = 0;

    // Put a token in an invalid column
    board.put(5);

    expect(board.player).to.equal(player);
  });

  it("should switch players", function() {
    const player1 = 0;
    const player2 = 1;

    expect(board.player).to.equal(player1);

    // Put a token to invoke new round
    board.put(1);

    expect(board.player).to.equal(player2);
  });

  it("should update putted columns", function() {
    const mockPutted = [1, 2];

    expect(board.puttedColumns.length).to.equal(0);

    // Put a token to add to columns
    board.put(1);
    board.put(2);

    expect(board.puttedColumns).to.deep.equal(mockPutted);
  });

  it("should validate grid spots", function() {
    const row = 2;
    const col = 4;

    // Check spot
    let validSpot = board.checkSpot(row, col);

    // Validate
    expect(validSpot).to.equal(false);
  });

  it("should end the game on a draw", function() {
    // Fill up the board
    for (let x = 1; x < 17; x++) {
      board.updateColumns(4 % x);
    }

    // Call the checkDraw method
    board.checkDraw();

    expect(board.gameOver).to.equal(true);
  });

  it("should end the game", function() {
    // Call endGame
    board.endGame();

    expect(board.gameOver).to.equal(true);
  });
});
