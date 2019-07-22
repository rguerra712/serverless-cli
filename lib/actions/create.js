'use strict';

const { exec } = require('./helpers/exec');

module.exports.create = (template, cmd) => {
  const { init } = cmd;
  console.log(`Creating from serverless template: ${template}`);
  exec(`serverless create --template ${template}`, cmd);
  if (init) {
    console.log('Creating initial package.json');
    exec('npm init -y', cmd);
  }
};
