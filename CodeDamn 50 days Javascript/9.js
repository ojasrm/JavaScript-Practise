const obj = { key: 1 };

function isEmpty(obj) {
	// write your solution here

	return JSON.stringify(obj) === JSON.stringify({});
}

console.log(`is empty object: ${isEmpty(obj)}`);
