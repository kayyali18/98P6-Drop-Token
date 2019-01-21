#!/usr/bin/env node

const inquirer = require("inquirer");
const chalk = require("chalk");

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

function ask() {
  if (newGame) {
    inquirer.prompt(questions).then(answers => {
      if (answers.newGame) {
        ask();
      } else {
        console.log(answers);
        newGame = false;
      }
    });
  }
}

ask();
