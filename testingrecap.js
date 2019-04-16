const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

// try {
// 	sumTest();
// } catch (err) {
// 	console.error(err);
// }

function sumTest() {
	const result = sum(10, 4);
	const expected = 13;
	expect(result).toBe(expected);
}
function subtractTest() {
	const result = subtract(10, 4);
	const expected = 6;
	expect(result).toBe(expected);
}

function expect(actual) {
	return {
		toBe(expected) {
			if (actual !== expected) {
				throw Error(`${actual} was not equal to ${expected}`);
			}
		}
	};
}

function test(title, cb) {
	try {
		cb();
		console.log(`✅ ${title} passed`);
	} catch (err) {
		console.log(`❌ ${title} failed`);
		console.error(err);
	}
}
test("add 10 and 6", sumTest);
test("subtract 4 from 10", subtractTest);
