function mostFreq(arr) {
	// write your code here
	var uniqueArr = [...new Set(arr)];
	var mostFreq = uniqueArr[0];
	var mostFreqCount = 0;
	var newMostFreqCount = 0;
	for (var i in uniqueArr) {
		newMostFreqCount = 0;
		for (var j in arr) {
			if (uniqueArr[i] == arr[j]) {
				newMostFreqCount++;
			}
		}
		if (newMostFreqCount > mostFreq) {
			mostFreq = uniqueArr[i];
			mostFreqCount = newMostFreqCount;
		}
	}
	return mostFreq.toString() + " " + mostFreqCount.toString();
}

const arr = [1, 2, 2, 4, 5, 6, 6];

console.log(mostFreq(arr));

console.log(mostFreq([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));
