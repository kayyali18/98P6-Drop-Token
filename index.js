#!/usr/bin/env node

const inquirer = require("inquirer");
const chalk = require("chalk");

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

const checkInput = input => {
  const validInputs = { GET: "GET", PUT: "PUT", BOARD: "BOARD" };
  return input[0] in validInputs;
};

const run = async () => {
  //show intro
  init();
  //take input
  const answers = await takeInput();
  const { INPUT } = answers;
  // check input --> this function calls appropriate functions
  console.log(INPUT);
  let x = checkInput(INPUT);
  console.log(x);
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

// function ask() {
//   inquirer.prompt(questions).then(answers => {
//     if (answers.newGame) {
//       ask();
//     } else {
//       console.log(answers);
//       newGame = false;
//     }
//   });
// }

run();
