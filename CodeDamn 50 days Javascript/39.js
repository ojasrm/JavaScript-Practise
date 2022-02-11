const timeToMixJuice = (name) => {
	// code here
	if (name == "Pure Strawberry Joy") {
		return 0.5;
	} else if (name == "Energizer" || name == "Green Garden") {
		return 1.5;
	} else if (name == "Tropical Island") {
		return 3;
	} else if (name == "All or Nothing") {
		return 5;
	} else {
		return 2.5;
	}
};

const limesToCut = (wedgesNeeded, limes) => {
	// code here
	let sum = 0;
	let count = 0;
	for (let i in limes) {
		if (sum < wedgesNeeded) {
			if (limes[i] == "small") {
				sum += 6;
			} else if (limes[i] == "medium") {
				sum += 8;
			} else if (limes[i] == "large") {
				sum += 10;
			}
			count++;
		} else {
			break;
		}
	}
	return count;
};

const remainingOrders = (timeLeft, orders) => {
	// code here
	let newArr = orders;
	for (let i in orders) {
		if (timeLeft > 0) {
			timeLeft -= timeToMixJuice(orders[i]);
			newArr.shift();
		}
	}
	return newArr;
};

console.log(timeToMixJuice("Tropical Island"));
console.log(timeToMixJuice("Berries & Lime"));
console.log(limesToCut(25, ["small", "small", "large", "medium", "small"]));
console.log(
	remainingOrders(5, ["Energizer", "All or Nothing", "Green Garden"])
);
