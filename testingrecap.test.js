const { sum, subtract } = require("./testingrecap");

function sumTest() {
	const result = sum(10, 4);
	const expected = 14;
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
test("add two numbers", sumTest);
test("subtract two numbers", subtractTest);
