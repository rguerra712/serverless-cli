'use strict';

const { exec } = require('child_process');

module.exports.exec = (command) => {
  exec(command, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(stdout);
    console.log(stderr);
  });
}
