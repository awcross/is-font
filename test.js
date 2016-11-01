import path from 'path';
import test from 'ava';
import isFont from './';

const fixtures = [
	'fake.ttf',
	'fixture.eot',
	'fixture.otf',
	'fixture.ttf',
	'fixture.woff',
	'fixture.woff2'
];

test('check valid fonts', t => {
	fixtures.slice(1).forEach(file => t.truthy(isFont(path.join('fixture', file))));
});

test('check invalid fonts', t => {
	fixtures.slice(0, 1).forEach(file => t.false(isFont(path.join('fixture', file))));
});
