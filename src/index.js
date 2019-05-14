#!/usr/bin/env node

const chalk       = require('chalk');
const clear       = require('clear');
const figlet      = require('figlet');

const files = require('../lib/files');
const generator = require('../lib/generator');

console.log(
  chalk.red(
    figlet.textSync('Dracarys', { horizontalLayout: 'full' })
  )
);

// if (files.directoryExists('.git')) {
//   console.log(chalk.red('Already a git repository!'));
//   process.exit();
// }

const inquirer  = require('../lib/inquirer');

async function run() {
  console.log(files.getCurrentDirectoryBase());
  const { operation } = await inquirer.askOperation();
  console.log(operation);

  switch(operation) {
    case 'function-component': generator.createFile();
    case 'class-component': generator.createFile();
    case 'screen': handleGenerateScreen();
  }
}

async function handleGenerateScreen() {
  const { features } = await inquirer.askScreenFeatures();
  console.log(features);
}

run();