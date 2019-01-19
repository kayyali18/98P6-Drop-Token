const inquirer = require("inquirer");

let questions = [
  {
    type: "input",
    name: "name",
    message: "What's your name?"
  }
];

inquirer.prompt(questions).then(answers => {
  console.log(`Hello ${answers.name}!`);
});
