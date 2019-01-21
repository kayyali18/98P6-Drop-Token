# 98P6-Drop-Token

A simple grid game that allows 2 players to compete against each other

## Get Started

### Dependencies

- NodeJS 10.14.x or newer
- Inquirer.js (Manages CLI)
- See Package.json for a complete list of packages required

If you are likely to need to manage multiple version of node on your local machine, we recommend version managers such as [nodenv](https://github.com/nodenv/nodenv) or [NVM](https://github.com/creationix/nvm/blob/master/README.md).

For those new to Node, the following tutorial will help get you up to speed with configuring a [Node environment](https://nodejs.org/en/docs/guides/getting-started-guide/).

### Get it

It is best practice to begin by forking this repo using the `Fork` button in the top-right corner of this screen. You should then be able to use `git clone` on your terminal to copy your fork onto your local machine.

    git clone https://github.com/[your-git-handle]/98P6-Drop-Token.git

Jump into your new local copy of the 98P6 Drop Token Game:

    cd 98P6-Drop-Token

Remove the upstream from this repo:

    git remote rm destination

And then add an `upstream` remote that points to your main repo:

    git remote add upstream https://github.com/[your-git-handle]/98P6-Drop-Token.git

Fetch the latest version of `master` from `upstream` (ie. the main repo):

    git fetch upstream master

Make sure to install dependencies by running:

    npm install

### Play it

Now that your game is setup just type:

    npm run game

### How to Play

```
    PUT [column]: Puts a piece to the column
    GET: List of columns that have been succesfully PUT to
    Board: Displays the current state of the board

```
