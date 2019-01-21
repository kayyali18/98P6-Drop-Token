module.exports = class Player {
  constructor(playerNum) {
    this.number = playerNum;

    this.tokens = [];
  }

  addToken(row, col) {
    const location = { row, col };
    let tokens = this.tokens;

    // Add new token location to shallow copy
    tokens.push(location);

    // Overwrite original state
    this.tokens = tokens;
  }
};