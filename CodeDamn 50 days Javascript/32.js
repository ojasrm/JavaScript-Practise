function gcd(a, b) {
	// write your code here
	var gcd = 1;
	for (var i = 1; i <= a || i <= b; i++) {
		if (a % i == 0 && b % i == 0) {
			// console.log(i)
			gcd = i;
		}
	}
	return gcd;
}

const a = 2154;
const b = 458;

console.log("The GCD of " + a + " ", b + " is " + gcd(a, b));
