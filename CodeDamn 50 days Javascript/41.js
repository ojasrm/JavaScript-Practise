function openOrSenior(data) {
	// your code goes below
	var member = [];
	for (var i = 0; i < data.length; i++) {
		if (data[i][0] >= 55 && data[i][1] > 7) {
			member.push("Senior");
		} else {
			member.push("Open");
		}
	}
	return member;
}

let output = openOrSenior([
	[45, 12],
	[55, 21],
	[19, -2],
	[104, 20],
]);

console.log(output);
