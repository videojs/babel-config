const es = require('./es.js');
const transformModulesCommonjs = require('@babel/plugin-transform-modules-commonjs');
const pluginDefaultModuleExports = require('babel-plugin-add-module-exports');

const config = Object.assign({}, es);

config.plugins.push(transformModulesCommonjs);
config.plugins.push(pluginDefaultModuleExports);

module.exports = config;
