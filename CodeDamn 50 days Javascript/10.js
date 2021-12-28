const array = [
	{ field: "id", operator: "eq" },
	{ field: "cStatus", operator: "eq" },
	{ field: "money", operator: "eq" },
];

const filterField = "money";

function removeArrayElement(filterField) {
	// write your solution here
	var newArr = [];
	var id;
	for (var i = 0; i < array.length; i++) {
		if (Object.values(array[i])[0] != filterField) {
			newArr.push(array[i]);
		}
	}
	return newArr;
}

console.log(`filtered array: ${removeArrayElement(filterField)}`);
