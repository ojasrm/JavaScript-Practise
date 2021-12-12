function wave(str) {
	// Your Code goes below
	var arr = str.split("");
	var myWave = [];
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		newArr = [];
		if (arr[i] !== " ") {
			for (var j = 0; j < arr.length; j++) {
				if (i == j) {
					newArr.push(arr[j].toUpperCase());
				} else {
					newArr.push(arr[j]);
				}
			}
			myWave.push(newArr.join(""));
		}
	}
	return myWave;
}

console.log(wave("two words"));
// wave('hello world')
