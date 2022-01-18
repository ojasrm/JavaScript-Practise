function isTriangle(a, b, c) {
	// your code here
	if (a + b > c && b + c > a && a + c > b) {
		return true;
	} else {
		return false;
	}
}
console.log(isTriangle(1, 2, 2));
console.log(isTriangle(7, 2, 2));
console.log(isTriangle(7, 14, 16));
