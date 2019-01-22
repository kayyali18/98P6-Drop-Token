/**
 *  We test our Player Class here
 */

const chai = require("chai");
const expect = chai.expect;
const assert = chai.assert;
const Player = require("../lib/Player.js");

describe("Player", function() {
  let player;

  // Instantiate a new Player
  beforeEach(function() {
    player = new Player(1);
  });

  it("should instantiate our good friend, the Player", function() {
    assert.isObject(player);
  });

  it("should have the correct default properties", function() {
    const mocks = {
      number: 1,
      tokens: [],
      columns: [0, 1, 2, 3],
      rows: [0, 1, 2, 3]
    };

    expect(player.grid).to.deep.equal(mocks.grid);
    expect(player.tokens).to.deep.equal(mocks.tokens);
    expect(player.columns).to.deep.equal(mocks.columns);
    expect(player.rows).to.deep.equal(mocks.rows);
  });

  it("should add token for player", function() {
    const mockTokens = [{ row: 1, col: 2 }, { row: 3, col: 4 }];

    // Check that tokens is empty
    expect(player.tokens.length).to.equal(0);

    // Add token
    player.addToken(1, 2);
    player.addToken(3, 4);

    // Check that tokens is what's expected
    expect(player.tokens).to.deep.equal(mockTokens);
  });

  it("should validate a win horizontally", function() {
    const mockGrid = [[1, 1, 1, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1]];

    const win = player.checkHorizontal(mockGrid);

    expect(win).to.equal(true);
  });

  it("should validate a win vertically", function() {
    const mockGrid = [[0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1]];

    const win = player.checkVertical(mockGrid);

    expect(win).to.equal(true);
  });

  it("should validate a win diagonally", function() {
    const mockGrid = [[0, 0, 0, 1], [0, 0, 1, 0], [0, 1, 0, 0], [1, 0, 0, 0]];

    const win = player.checkDiagonal(mockGrid);

    expect(win).to.equal(true);
  });
});
