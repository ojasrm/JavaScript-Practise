function high(x) {
	//code your magic here
	var alphabets = "abcdefghijklmnopqrstuvwxyz";
	// console.log(alphabets.length)
	var high = 0;
	var highWord;
	var words = x.split(" ");
	for (var i = 0; i < words.length; i++) {
		var sum = 0;
		var word = words[i].split("");
		for (var j = 0; j < word.length; j++) {
			var position = alphabets.indexOf(word[j]) + 1;
			sum += position;
		}
		if (high < sum) {
			high = sum;
			highWord = words[i];
		}
	}
	return highWord;
}

console.log(high("what time are we climbing up the volcano"));
