const needsLicense = (kind) => {
	// code here
	if (kind == "car" || kind == "truck") {
		return true;
	} else {
		return false;
	}
};

const chooseVehicle = (option1, option2) => {
	// code here
	let sortedArr = [option1, option2].sort();
	return sortedArr[0] + " is clearly the better choice.";
};

const calculateResellPrice = (originalPrice, age) => {
	// code here
	if (age < 3) {
		return originalPrice * 0.8;
	} else if (age < 10) {
		return originalPrice * 0.7;
	} else {
		return originalPrice * 0.5;
	}
};
console.log(needsLicense("bike"));
console.log(chooseVehicle("Wuling Hongguang", "Toyota Corolla"));
console.log(calculateResellPrice(5000, 15));
