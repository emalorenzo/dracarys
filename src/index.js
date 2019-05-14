#!/usr/bin/env node

const chalk = require('chalk');
const figlet = require('figlet');
const { generateComponent, generateScreen } = require('../lib/generator');
const inquirer  = require('../lib/inquirer');

async function run() {
  console.log(chalk.red(
    figlet.textSync('Dracarys', { horizontalLayout: 'full' })
  ));
  const { operation } = await inquirer.askOperation();
  const { name } = await inquirer.askName();
  const { path } = await inquirer.askPath();

  if (operation === 'screen') {
    const { features } = await inquirer.askScreenFeatures();
    generateScreen(operation, name, path, features);
  } else {
    generateComponent(operation, name, path);
  }
}

run();