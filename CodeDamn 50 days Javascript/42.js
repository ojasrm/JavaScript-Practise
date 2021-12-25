function sumTwoSmallestNumbers(numbers) {
	//Code below
	var sortedArr = numbers.sort(function (a, b) {
		return a - b;
	});
	var sum = sortedArr[0] + sortedArr[1];
	return sum;
}
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
