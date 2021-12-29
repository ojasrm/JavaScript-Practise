const isPangram = (input) => {
	// Code here
	const alphabets = "abcdefghijklmnopqrstuvwxyz";
	var flag = true;
	for (var i in alphabets) {
		if (input.toLowerCase().includes(alphabets[i])) {
			continue;
		} else {
			flag = false;
			break;
		}
	}
	return flag;
};
console.log(isPangram("The quick brown fox jumps over the lazy dog"));
