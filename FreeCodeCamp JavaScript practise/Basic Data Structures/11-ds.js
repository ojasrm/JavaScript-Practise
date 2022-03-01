function filteredArray(arr, elem) {
	let newArr = [];
	// Only change code below this line
	for (let i = 0; i < arr.length; i++) {
		let bool = false;
		for (let j = 0; j < arr[i].length; j++) {
			// console.log((arr[i])[j])
			if (elem == arr[i][j]) {
				bool = true;
				break;
			}
		}
		if (bool == false) {
			newArr.push(arr[i]);
		}
	}
	// Only change code above this line
	return newArr;
}

console.log(
	filteredArray(
		[
			[3, 2, 3],
			[1, 6, 3],
			[3, 13, 26],
			[19, 3, 9],
		],
		3
	)
);
