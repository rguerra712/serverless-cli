'use strict';

const { exec } = require('./helpers/exec');

function runCommandForPlugins(plugins, installOrUninstallCommand, cmd) {
  plugins.forEach(plugin => {
    exec(`serverless plugin ${installOrUninstallCommand} -n ${plugin}`, cmd);
    console.log(`${installOrUninstallCommand}ing plugin ${plugin}`);
  })
}

module.exports.addPlugins = (plugin, otherPlugins, cmd) => {
  console.log('Updating plugins...');
  const plugins = [plugin, ...otherPlugins];
  const { add, remove } = cmd;
  if (remove) {
    runCommandForPlugins(plugins, 'uninstall', cmd);
  }
  if (add || !remove) {
    runCommandForPlugins(plugins, 'install', cmd);
  }
}
