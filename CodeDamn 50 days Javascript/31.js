function factorial(n) {
	// write your code here
	var factorial = 1;
	for (var i = 1; i <= n; i++) {
		factorial *= i;
	}
	return factorial;
}

let n = 4;
console.log("The factorial of " + n + " is " + factorial(n));
