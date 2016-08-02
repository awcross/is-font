'use strict';

const readChunk = require('read-chunk');
const fileType = require('file-type');

module.exports = function (file) {
	const fileInfo = fileType(readChunk.sync(file, 0, 262)) || '';
	const types = [
		'eot',
		'otf',
		'ttf',
		'woff',
		'woff2'
	];

	if (types.indexOf(fileInfo.ext) > -1) {
		return fileInfo;
	}

	return false;
};
