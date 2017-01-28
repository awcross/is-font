import path from 'path';
import test from 'ava';
import m from './';

const fixtures = [
	'fixture.eot',
	'fixture.otf',
	'fixture.ttf',
	'fixture.woff',
	'fixture.woff2'
];

test('valid fonts', t => {
	fixtures.forEach(file => {
		const obj = m(path.join('fixture', file));
		t.is(typeof obj, 'object');
	});
});

test('invalid font', t => {
	t.false(m('fixture/fake.ttf'));
});
