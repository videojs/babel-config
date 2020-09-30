const path = require('path');
const transformObjectAssign = require('@babel/plugin-transform-object-assign');
const transformRuntime = require('@babel/plugin-transform-runtime');
const presetEnv = require('@babel/preset-env');

module.exports = {
  exclude: path.join(process.cwd(), 'node_modules/**'),
  compact: false,
  babelrc: false,
  presets: [
    [presetEnv, {bugfixes: true, loose: true, modules: false, targets: {browsers: ['defaults', 'ie 11']}}]
  ],
  plugins: [
    [transformRuntime, {regenerator: false}],
    transformObjectAssign
  ]
};
