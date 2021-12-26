const num = 3849;

function reverseGivenInteger(num) {
	// write your solution here
	var revStr = [];
	var strArr = num.toString().split("");
	for (var i = strArr.length; i >= 0; i--) {
		revStr.push(strArr[i]);
	}
	return parseInt(revStr.join(""));
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`);
