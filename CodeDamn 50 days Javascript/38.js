const valid = (string) => {
	// code here
	let stripped = string.split(" ").join("");
	let arr = stripped.split("");
	for (let i = 0; i < arr.length; i += 2) {
		if (parseInt(arr[i]) * 2 > 10) {
			arr[i] = parseInt(arr[i]) * 2 - 9;
		} else {
			arr[i] = parseInt(arr[i]) * 2;
		}
	}
	let sum = 0;
	for (let i in arr) {
		sum += parseInt(arr[i]);
	}
	if (sum % 10 == 0) {
		return true;
	} else {
		return false;
	}
};
console.log(valid("4539 3195 0343 6467"));
console.log(valid("8273 1232 7352 0569"));
