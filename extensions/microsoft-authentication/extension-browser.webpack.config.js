/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

//@ts-check

'use strict';

const path = require('path');
const withBrowserDefaults = require('../shared.webpack.config').browser;

module.exports = withBrowserDefaults({
	context: __dirname,
	node: false,
	entry: {
		extension: './src/extension.ts',
	},
	externals: {
		'keytar': 'commonjs keytar'
	},
	resolve: {
		alias: {
			'create-hash': path.resolve(__dirname, 'node_modules/create-hash/browser.js'),
			'node-fetch': path.resolve(__dirname, 'node_modules/node-fetch/browser.js'),
			'randombytes': path.resolve(__dirname, 'node_modules/randombytes/browser.js'),
			'uuid': path.resolve(__dirname, 'node_modules/uuid/dist/esm-browser/index.js')
		}
	}
});
