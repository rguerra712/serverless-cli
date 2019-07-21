'use strict';

const version = require('./../package.json').version;
const program = require('commander');
const { create } = require('./actions/create');

program
  .version(version);

// Create
program
  .command('create <template>')
  .option('-i, --init', 'Initialize a package.json with all defaults')
  .option('--verbose', 'Verbose, show info logs in addition to errors')
  .action(create);

// Parse args
program.parse(process.argv);
