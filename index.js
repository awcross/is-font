'use strict';
const readChunk = require('read-chunk');
const fileType = require('file-type');

const fontExts = new Set([
	'eot',
	'otf',
	'ttf',
	'woff',
	'woff2'
]);

module.exports = file => {
	const info = fileType(readChunk.sync(file, 0, 262));
	return fontExts.has(info && info.ext) ? info : false;
};
