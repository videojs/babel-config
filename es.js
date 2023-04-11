const path = require('path');
const transformObjectAssign = require.resolve('@babel/plugin-transform-object-assign');
const transformRuntime = require.resolve('@babel/plugin-transform-runtime');
const presetEnv = require.resolve('@babel/preset-env');

const defaultBrowsersList = [
  'last 3 major versions',
  'Firefox ESR',
  // This ensures support for certain smart TVs (ex. LG WebOS 4)
  'Chrome >= 53',
  'not dead',
  'not ie 11',
  'not baidu 7',
  'not and_qq 11',
  'not and_uc 12',
  'not op_mini all',
  'not op_mob 64'
];

module.exports = {
  exclude: path.join(process.cwd(), 'node_modules/**'),
  compact: false,
  babelrc: false,
  presets: [
    [presetEnv, {bugfixes: true, loose: true, modules: false, targets: defaultBrowsersList}]
  ],
  plugins: [
    [transformRuntime, {regenerator: false}],
    transformObjectAssign
  ]
};
