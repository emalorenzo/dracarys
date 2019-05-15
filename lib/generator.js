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

function getRootDirectory() {
  const userDirectory = shell.pwd();
  shell.cd(__dirname);
  shell.cd('..');
  const rootDirectory = shell.pwd()
  shell.cd(userDirectory);

  return rootDirectory;
}

function copyComponentAndStyles(operation, name, path, rootDirectory) {
  shell.cp(`${rootDirectory}/templates/styles.js`, `${path}/styles.js`);
  shell
    .sed('COMPONENT_NAME', name, `${rootDirectory}/templates/${operation}.js`)
    .to(`${path}/${name}.js`);
}

function handleFeature(feature, name, path, rootDirectory) {
  switch(feature) {
    case 'functionComponent':
    case 'classComponent': 
      copyComponentAndStyles(feature, name, path, rootDirectory);
      break;
    case 'redux':
    case 'sagas':
      shell.cp(`${rootDirectory}/templates/${feature}.js`, `${path}/${feature}.js`);
  }
}

function generateComponent(operation, name, path) {
  checkDirectory(path);
  copyComponentAndStyles(operation, name, path, getRootDirectory());
}

function generateScreen(name, path, features) {
  checkDirectory(path);

  if (features.length === 0) {
    console.log('Ok, no features.. ¯\_(ツ)_/¯  ');
    return;
  }

  features.forEach(feature => handleFeature(feature, name, path, getRootDirectory()));
}

module.exports = { generateComponent, generateScreen };