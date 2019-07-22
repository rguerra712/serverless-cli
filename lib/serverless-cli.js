'use strict';

const version = require('./../package.json').version;
const program = require('commander');
const { create } = require('./actions/create');
const { addPlugins } = require('./actions/plugins');

// Update version
program
  .version(version);

// Create
program
  .command('create <template>')
  .option('-i, --init', 'Initialize a package.json with all defaults')
  .option('--verbose', 'Verbose, show info logs in addition to errors')
  .action(create);

// Plugins
program
  .command('plugins <plugin> [otherPlugins...]')
  .option('-a, --add', 'Add serverless plugin(s)')
  .option('-r, --remove', 'Remove serverless plugin(s)')
  .option('--verbose', 'Verbose, show info logs in addition to errors')
  .action(addPlugins);

// Parse args
program.parse(process.argv);
