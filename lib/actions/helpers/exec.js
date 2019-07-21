'use strict';

const { exec } = require('child_process');

module.exports.exec = (command, cmd) => {
  exec(command, (err, stdout, stderr) => {
    const { verbose } = cmd;
    if (verbose) {
      console.log(`running ${command}`);
    }
    if (err) {
      console.error(err);
      return;
    }

    if (verbose) {
      console.log(stdout);
      console.log(stderr);
    }
  });
};
