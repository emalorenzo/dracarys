const fs = require('fs');
const path = require('path');
const shell = require('shelljs');

module.exports = {
  createFile: () => {
    shell
      .sed('-e', 's/COMPONENT_NAME/Ema/g', '../templates/functionComponent.js', 'src/components/Ema/index.js');
      //.to();

    //fs.writeFileSync('.pepe', 'Helloooo');
  },
};