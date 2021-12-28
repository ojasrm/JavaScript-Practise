function fibonacci(n) {
	// write your solution here
	var fibonacciArr = [1, 1];
	for (var i = 0; i < n; i++) {
		if (i == 0 || i == 1) {
			continue;
		} else {
			fibonacciArr.push(fibonacciArr[i - 1] + fibonacciArr[i - 2]);
		}
	}
	return parseInt(fibonacciArr[n - 1]);
}

console.log(`fibonacci value at position 5: ${fibonacci(5)}`);
