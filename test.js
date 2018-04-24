import test from 'ava';
import m from '.';
console.log(m("public", 'test'));
test('title', t => {
	const err = t.throws(() => {
		m(123);
	}, TypeError);
	t.is(err.message, 'Expected a string, got number');

	t.is(m('unicorns'), 'unicorns & rainbows');
});
