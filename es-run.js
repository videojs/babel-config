#!/usr/bin/env node
const run = require('./run');
const config = require.resolve('./es.js');

run(['--config-file', config].concat(process.argv.slice(2)));
