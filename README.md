# @videojs/babel-config

[![Build Status](https://travis-ci.org/videojs/babel-config.svg?branch=master)](https://travis-ci.org/videojs/babel-config)
[![Greenkeeper badge](https://badges.greenkeeper.io/videojs/babel-config.svg)](https://greenkeeper.io/)
[![Slack Status](http://slack.videojs.com/badge.svg)](http://slack.videojs.com)

Currently babel configs are the same for most plugins, and most of them are built using this babel config via babel. We have some libraries though that are should not be built using rollup for nodejs consumption, that are currently doing so. So this config while still consumed by [videojs-generate-rollup-config](https://github.com/videojs/videojs-generate-rollup-config) can also be used standalone with babel-cli.

Lead Maintainer: Brandon Casey [@brandonocasey](https://github.com/brandonocasey)

Maintenance Status: Stable


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Installation](#installation)
- [Usage](#usage)
- [Important things](#important-things)
- [Changing configuration](#changing-configuration)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```
$ npm install --save-dev @babel/cli @videojs/babel-config
```


## Usage

1. In your rollup config add a line to delete module builds:
```js
if (config.builds.module) {
	delete config.builds.module;
}
```
2. Add a npm scripts for cjs/es dists to your package.json:

```json
{
  "build:cjs": "babel-config-cjs -d ./dist/cjs ./src",
  "build:es": "babel-config-es -d ./dist/cjs ./src",
  "watch:cjs": "npm run build:cjs -- -w",
  "watch:es": "npm run build:es -- -w"
}
```

3. verify that `main` in `package.json` is set to the cjs dist. Something like `dist/cjs/index.js`
4. verify that `module` in `package.json` is set to the es dist. Something like `dist/es/index.js`
5. verify that `browser` in `package.json` is set to the browser dist. Something like `dist/project-name.js`

## Important things
* When running through `babel-config-cjs`, `babel-config-es`, or `babel-config-run` if `TEST_BUNDLE_ONLY` is set **nothing** will run!
* The `babel-config-cjs` binary runs babel cli with `--verbose` and `--config-file` set to the cjs config exported here.
* The `babel-config-es` binary runs babel cli with `--verbose` and `--config-file` set to the es config exported here.
* The `babel-config-run` binary runs babel cli with `--verbose` but no config file.

## Changing configuration
1. require the configuration you want to use `const config = require('@videojs/babel-config/cjs.js');`
2. Make changes to it and export: `module.export = config`.
3. pass `--config-file <path>` in the above scripts so that everything points to your new configs.
4. change the above script to use `babel-config-run`

