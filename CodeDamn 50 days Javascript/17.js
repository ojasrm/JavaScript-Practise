/**
 *
 * @param {number[]} inputArray Array of numbers
 */
const longestConsecutiveSequence = (inputArray) => {
	// Your code here
	let sortedArr = inputArray.sort(function (a, b) {
		return a - b;
	});
	let count = 1;
	for (let i = 0; i < sortedArr.length; i++) {
		// console.log(sortedArr[i])
		if (sortedArr[i + 1] == sortedArr[i] + 1) {
			count++;
		}
	}
	return count;
};
console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
