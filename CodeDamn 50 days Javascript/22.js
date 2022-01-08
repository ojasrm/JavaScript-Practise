let uniqueInOrder = (iterable) => {
	//your code here - remember iterable can be a string or an array
	var myArr = [];
	if (Array.isArray(iterable)) {
		myArr = iterable;
	} else {
		myArr = iterable.split("");
	}
	var newArr = [];
	for (var i = 0; i < myArr.length; i++) {
		if (myArr[i] == myArr[i + 1]) {
			continue;
		} else {
			newArr.push(myArr[i]);
		}
	}
	return newArr;
};
console.log(uniqueInOrder([1, 2, 2, 3, 3]));
console.log(uniqueInOrder("ABBCcAD"));
