function getMiddle(s) {
	// your code here
	let arr = s.split("");
	let len = arr.length;
	if (len % 2 == 0) {
		return [arr[len / 2], arr[len / 2]].join("");
	} else {
		return arr[parseInt(len / 2)];
	}
}
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));
