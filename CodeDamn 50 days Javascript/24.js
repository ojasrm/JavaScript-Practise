function expandedForm(num) {
	// Your code here
	var digitArr = [];
	for (var i = 0; i < num.toString().split("").length; i++) {
		var digit = num % 10 ** (i + 1);
		digitArr.unshift(digit);
		num = num - digit;
	}
	return digitArr.join("+");
}
