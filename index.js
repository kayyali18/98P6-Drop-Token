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
  if (newGame) {
    console.log(chalk.green("\nWelcome to 98P6 Drop Token"));
    console.log(chalk.green("\n\n-------- CONTROLS ----------"));
    console.log(chalk.green(`\nPUT [column]: Puts a piece to the column`));
    console.log(
      chalk.green(`\nGET: List of columns that have been succesfully PUT to`)
    );
    console.log(
      chalk.green(`\nBoard: Displays the current state of the board\n`)
    );
  }
  newGame = false;
  console.log(chalk.green("\n\n--------------------------"));
};

/**
 * This function initialises inquirer's questions promise
 *
 *
 * @return {Promise} An inquiry promise that resolves to the answers object
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
 */

const handleInput = input => {
  if (input[0] == "PUT") Board.put(input[1]);
  else if (input[0] == "BOARD") Board.display();
  else Board.get();
};

/**
 * This function logs error messages
 *
 * @param {array} input The array containing the user input separated by space
 *
 */

const errorMsg = input => {
  console.log(`ERROR: You entered ${input[0]}\n`);
};

/**
 *
 * ----------------------   This is the main function  ---------------------------
 *
 */

const run = async () => {
  // Show intro
  init();

  // Take input returns a promise, we resolve it
  const answers = await takeInput();
  const { INPUT } = answers;

  // Check input
  const valid = checkInput(INPUT);

  // Handle input
  if (valid) handleInput(INPUT);
  else errorMsg(INPUT);

  // Run game again if still going
  if (!Board.gameOver) run();
  else console.log(chalk.green("EXIT \n ------- \n Thanks for Playing!"));
};

// Start the game

run();
