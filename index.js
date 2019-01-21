#!/usr/bin/env node

const inquirer = require("inquirer");
const chalk = require("chalk");

const gameBoard = require("./lib/Board");

const Board = new gameBoard();
let newGame = true;

/**
 * This function greets the user
 */

const init = () => {
  if (newGame) console.log(chalk.green("\nWelcome to 98P6 Drop Token"));
  newGame = false;
  console.log(chalk.green("\n\n-------- CONTROLS ----------"));
  console.log(chalk.green(`\nPUT [column]: Puts a piece to the column`));
  console.log(
    chalk.green(`\nGET: List of columns that have been succesfully PUT to`)
  );
  console.log(
    chalk.green(`\nBoard: Displays the current state of the board\n`)
  );
};

/**
 * This function asks the user to input command
 *
 *
 * @return {function} An inquiry promise that resolves to the answers object
 */

const takeInput = () => {
  const questions = [
    {
      name: "INPUT",
      type: "input",
      message: " ",
      filter: function(val) {
        return val.toUpperCase().split(" ");
      }
    }
  ];

  return inquirer.prompt(questions);
};

/**
 * This function validates userInput
 *
 * @param {array} input
 *
 * @return {boolean} A boolean describing input validity
 */

const checkInput = input => {
  const validInputs = { GET: "GET", PUT: "PUT", BOARD: "BOARD" };
  return input[0] in validInputs;
};

/**
 * This function handles user input if valid
 *
 * @param {array} input The array containing the user input separated by space
 *
 * @return {function} An inquiry promise that resolves to the answers object
 */

const handleInput = input => {
  if (input[0] == "PUT") Board.put(input[1]);
  else if (input[0] == "BOARD") Board.display();
  else Board.get();
  Board.switchPlayer();
};

const errorMsg = input => {
  console.log(`ERROR: You entered ${input[0]}\n`);
};

const run = async () => {
  // Show intro
  init();

  // Take input
  const answers = await takeInput();
  const { INPUT } = answers;

  // Check input
  const valid = checkInput(INPUT);

  // Handle input
  if (valid) handleInput(INPUT);
  else errorMsg(INPUT);

  run();
};

let questions = [
  {
    type: "input",
    name: "player1",
    message: "Player 1 enter your name:",
    when: function(answers) {
      if (answers.newGame) return true;
      return false;
    }
  },
  {
    type: "confirm",
    name: "newGame",
    message: "Begin new game? (Enter for yes)",
    default: false,
    validate: function(value) {
      value.toLowerCase();
      var pass = value.match(/^y$\|^yes$/i) || value.match(/^n$\|^no$/i);
      if (pass) {
        return true;
      }

      return false;
    }
  }
];

run();
