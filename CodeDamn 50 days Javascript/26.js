function findOdd(arr) {
	//happy coding!
	let uniqueArr = [...new Set(arr)];
	for (let i in uniqueArr) {
		let count = 0;
		for (let j in arr) {
			if (uniqueArr[i] == arr[j]) {
				count++;
			}
		}
		if (count % 2 != 0) {
			return uniqueArr[i];
		}
	}
}
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]));
