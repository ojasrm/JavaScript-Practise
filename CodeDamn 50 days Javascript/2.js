const str = "JavaScript is awesome";

function reverseAString(str) {
	// write your solution here
	var revStr = [];
	var strArr = str.split("");
	for (var i = strArr.length; i >= 0; i--) {
		revStr.push(strArr[i]);
	}
	return revStr.join("");
}

console.log(`Reversed string is: ${reverseAString(str)}`);
