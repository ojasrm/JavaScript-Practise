const colorCode = (color) => {
	// Code here
	var colCode = {
		black: 0,
		brown: 1,
		red: 2,
		orange: 3,
		yellow: 4,
		green: 5,
		blue: 6,
		violet: 7,
		grey: 8,
		white: 9,
	};
	if (colCode[color.toLowerCase()]) {
		return colCode[color.toLowerCase()];
	} else {
		return null;
	}
};
console.log(colorCode("red"));
