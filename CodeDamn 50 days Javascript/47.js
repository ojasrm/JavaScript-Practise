function isIsogram(str) {
	// your code here
	if (str.length) {
		let strArr = str.toLowerCase().split("");
		let uniqueArr = [...new Set(strArr)];
		if (strArr.length == uniqueArr.length) {
			return true;
		} else {
			return false;
		}
	} else {
		return true;
	}
}

console.log(isIsogram("isogram"));
console.log(isIsogram(""));
console.log(isIsogram("moOse"));
