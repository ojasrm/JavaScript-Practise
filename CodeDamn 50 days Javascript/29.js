function accum(s) {
	// your code goes below
	var arr = s.split("");
	var newArr = [];
	// console.log(arr)
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j <= i; j++) {
			if (j == 0) {
				newArr.push(arr[i].toUpperCase());
			} else {
				newArr.push(arr[i].toLowerCase());
			}
		}
		// console.log(arr[i])
		newArr.push("-");
	}
	newArr.pop();
	return newArr.join("");
}
console.log(accum("ZpglnRxqenU"));
