const inquirer   = require('inquirer');
const files      = require('./files');

module.exports = {
  askOperation: () => {
    const question = [
      {
        name: 'operation',
        type: 'list',
        message: 'What do you want to create?',
        choices: [
          {
            name: 'Function Component',
            value: 'function-component'
          },
          {
            name: 'Class Component',
            value: 'class-component'
          },
          {
            name: 'New Screen',
            value: 'screen',
          }
        ],
      },
    ];
    return inquirer.prompt(question);
  },
  askScreenFeatures: () => {
    const question = [
      {
        name: 'features',
        type: 'checkbox',
        message: 'What features do you want?',
        choices: [
          {
            name: 'Add index file',
            value: 'index',
          },
          {
            name: 'Function Component',
            value: 'function-component'
          },
          {
            name: 'Class Component',
            value: 'class-component'
          },
          {
            name: 'Container',
            value: 'container',
          },
          {
            name: 'Redux module',
            value: 'redux',
          },
          {
            name: 'Saga module',
            value: 'saga',
          },
        ],
      }
    ];
    return inquirer.prompt(question);
  },
}