import path from 'path';
import test from 'ava';
import isFont from './';

const types = [
	'eot',
	'otf',
	'ttf',
	'woff',
	'woff2'
];

function check(ext) {
	const file = path.join(__dirname, 'fixture', `fixture.${ext}`);
	const fileInfo = isFont(file);

	return fileInfo.ext;
}

types.forEach(type => {
	test(type, t => {
		t.is(check(type), type);
	});
});
