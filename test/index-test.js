/**
 *  We test our Index Unit Functions Where possible
 */

const chai = require("chai");
const expect = chai.expect;
const assert = chai.assert;

const { checkInput } = require("../index.js");

describe("Index ---- Main", function() {
  it("should validate proper user inputs", function() {
    // Mock Inputs
    const valid = checkInput(["GET"]);
    const invalid = checkInput(["NOTGET"]);

    expect(valid).to.equal(true);
    expect(invalid).to.equal(false);
  });
});
