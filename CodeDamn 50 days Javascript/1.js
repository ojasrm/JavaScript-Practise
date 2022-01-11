function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
	// write your solution here
	var diff = rangeEnd - rangeStart;
	var randNum = Math.random() * diff + rangeStart;
	return randNum;
}

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`);
