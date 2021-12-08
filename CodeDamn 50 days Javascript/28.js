function toWeirdCase(string) {
	// Your code goes here
	var arr = string.split("");
	var newArr = [];
	for (var i in arr) {
		if (i % 2 == 0) {
			newArr.push(arr[i].toUpperCase());
		} else {
			newArr.push(arr[i].toLowerCase());
		}
	}
	return newArr.join("");
}

console.log(
	`The weird case of ${"A test case"} is ${toWeirdCase("A test case")}`
);
