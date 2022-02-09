const isLeap = (year) => {
	// code here
	if (year % 4 == 0) {
		if (year % 100 == 0) {
			if (year % 400 == 0) {
				return true;
			} else {
				return false;
			}
		}
		return true;
	} else {
		return false;
	}
};
console.log(isLeap(2022));
console.log(isLeap(2020));
console.log(isLeap(2000));
console.log(isLeap(1900));
