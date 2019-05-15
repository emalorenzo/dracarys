const inquirer   = require('inquirer');

function askOperation() {
  const question = [
    {
      name: 'operation',
      type: 'list',
      message: 'What do you want to create?',
      choices: [
        {
          name: 'Function Component',
          value: 'functionComponent'
        },
        {
          name: 'Class Component',
          value: 'classComponent'
        },
        {
          name: 'New Screen',
          value: 'screen',
        }
      ],
    },
  ];
  return inquirer.prompt(question);
}

function askName() {
  const question = [
    {
      name: 'name',
      type: 'input',
      message: 'How do you want to call it?',
      validate: value => value.length ? true : 'Please, write a name',
    },
  ];
  return inquirer.prompt(question);
}

function askPath() {
  const question = [
    {
      name: 'path',
      type: 'input',
      message: 'Where do you want it?',
      default: 'src',
    },
  ];
  return inquirer.prompt(question);
}

function askScreenFeatures() {
  const question = [
    {
      name: 'features',
      type: 'checkbox',
      message: 'What features do you want?',
      choices: [
        // {
        //   name: 'Add index file',
        //   value: 'index',
        // },
        {
          name: 'Function Component',
          value: 'functionComponent'
        },
        {
          name: 'Class Component',
          value: 'classComponent'
        },
        // {
        //   name: 'Container',
        //   value: 'container',
        // },
        {
          name: 'Redux module',
          value: 'redux',
        },
        {
          name: 'Sagas module',
          value: 'sagas',
        },
      ],
    }
  ];
  return inquirer.prompt(question);
}

module.exports = {
  askOperation,
  askName,
  askPath,
  askScreenFeatures,
}