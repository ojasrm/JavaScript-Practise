function findEvenIndex(arr) {
	//Code goes here!
	var index = -1;
	for (var i = 1; i < arr.length - 1; i++) {
		var sum1 = 0;
		var sum2 = 0;
		for (var j = 0; j < arr.length; j++) {
			// console.log(j)
			if (j < i) {
				sum1 += arr[j];
			}
			if (j > i) {
				sum2 += arr[j];
				// console.log(arr[j])
			}
		}
		if (sum1 == sum2) {
			index = i;
			break;
		}
	}
	return index;
}
findEvenIndex([1, 2, 3, 4, 3, 2, 1]);
findEvenIndex([20, 10, 30, 10, 10, 15, 35]);
findEvenIndex([1, 100, 50, -51, 1, 1]);
findEvenIndex([1, 2, 3, 4, 5, 6]);
