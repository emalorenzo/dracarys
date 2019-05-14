const fs = require('fs');
const shell = require('shelljs');

function checkDirectory(path) {
  let isDirectory;
  try {
    isDirectory = fs.statSync(path).isDirectory();
  } catch (err) {
    isDirectory = false;
  }
  if (!isDirectory) {
    shell.mkdir('-p', path);
  }
}

function generateComponent(operation, name, path) {
  checkDirectory(path);
  shell.cp('templates/styles.js', `${path}/styles.js`);
  shell
    .sed('COMPONENT_NAME', name, `templates/${operation}.js`)
    .to(`${path}/${name}.js`);
}

function generateScreen(operation, name, path, features) {
  checkDirectory(path);
  shell.cp('templates/styles.js', 'generated/styles.js');
  shell
    .sed('COMPONENT_NAME', name, 'templates/functionComponent.js')
    .to('generated/generated.js');
}

module.exports = { generateComponent, generateScreen };