const str = "JavaScript is simple but not easy to master";
const wordLimit = 3;

function truncateWithWordLimit(str, wordLimit) {
	// write your solution here
	var strArr = str.split(" ");
	var newStrArr = [];
	for (var i = 0; i < wordLimit; i++) {
		newStrArr.push(strArr[i]);
	}
	return newStrArr.join(" ");
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`);
