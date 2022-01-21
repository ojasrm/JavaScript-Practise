function findOutlier(integers) {
	//your code here
	let remainderArr = [];
	for (let i in integers) {
		remainderArr.push(integers[i] % 2);
	}
	let zeroCount = 0;
	let oneCount = 0;
	for (let j in remainderArr) {
		if (remainderArr[j] == 0) {
			zeroCount++;
		} else {
			oneCount++;
		}
	}
	if (zeroCount > oneCount) {
		return integers[remainderArr.indexOf(1)];
	} else {
		return integers[remainderArr.indexOf(0)];
	}
}
console.log(findOutlier([2, 6, 8, 10, 3]));
console.log(findOutlier([0, 0, 3, 0, 0]));
console.log(findOutlier([1, 1, 0, 1, 1]));
