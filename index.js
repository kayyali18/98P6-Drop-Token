#!/usr/bin/env node

const inquirer = require("inquirer");
const chalk = require("chalk");

/**
 * This function greets the user
 */

const init = () => {
  console.log(chalk.green("\nWelcome to 98P6 Drop Token"));
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

const handleInput = input => {};

const run = async () => {
  //show intro
  init();
  //take input
  const answers = await takeInput();
  const { INPUT } = answers;
  // check input --> this function calls appropriate functions
  console.log(INPUT);
  const valid = checkInput(INPUT);
  if (valid) handleInput(INPUT);
  else errorMsg(INPUT);
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
