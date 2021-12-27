const str = "XeroX";

function getTheGapX(str) {
	// write your solution here
	if (str.lastIndexOf("X") >= 0 && str.indexOf("X") >= 0) {
		return str.lastIndexOf("X") - str.indexOf("X");
	} else {
		return str.indexOf("X");
	}
}

console.log(`Gap between the X's: ${getTheGapX(str)}`);
