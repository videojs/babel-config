#!/usr/bin/env node
const spawnSync = require('child_process').spawnSync;
const babelcli = require.resolve('@babel/cli/bin/babel.js');

const run = function(args) {
  if (process.env.TEST_BUNDLE_ONLY) {
    return;
  }

  const {status} = spawnSync(babelcli, ['--verbose'].concat(args), {shell: true, stdio: 'inherit'});

  process.exit(status);
};

if (require.main === module) {
  run(process.argv.slice(2));
}
module.exports = run;
