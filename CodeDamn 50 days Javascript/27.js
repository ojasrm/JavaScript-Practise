function getCount(str) {
	let vowelsCount = 0;
	// enter your magic here
	var arr = str.split("");
	var regex = /a|e|i|o|u/i;
	for (var i in arr) {
		if (regex.test(arr[i])) {
			vowelsCount++;
		}
	}
	return vowelsCount;
}

console.log(getCount("abracadabra"));
