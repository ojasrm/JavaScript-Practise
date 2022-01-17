function nthlargest(arr, highest) {
	// write your code here
	let sortedArr = arr.sort(function (a, b) {
		return a - b;
	});
	return sortedArr[highest];
}

const arr = [43, 56, 23, 89, 88, 90, 99, 652];
const highest = 4;

console.log(nthlargest(arr, highest));
