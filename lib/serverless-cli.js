'use strict';

const version = require('./../package.json').version;
const program = require('commander');
const { exec } = require('./exec');

program
  .version(version)
  .option('-i, --init', 'Initialize a package.json with all defaults')
  .parse(process.argv);

const { init } = program;
if (init) {
  exec('npm init -y');
}
