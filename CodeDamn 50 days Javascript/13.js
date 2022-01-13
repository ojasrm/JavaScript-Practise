const spaceAge = (seconds) => {
	const yearsInAllPlanets = {
		Mercury: 0.2408467,
		Venus: 0.61519726,
		Earth: 1,
		Mars: 1.8808158,
		Jupiter: 11.862615,
		Saturn: 29.447498,
		Uranus: 84.016846,
		Neptune: 164.79132,
	};

	// Your solution starts here
	var earthYearSec = 31557600;
	var earthYearCalc = seconds / earthYearSec;
	var newYearsCalc = Object.values(yearsInAllPlanets).map((num) => {
		return Math.round((earthYearCalc * 100) / num) / 100;
	});
	var keys = Object.keys(yearsInAllPlanets);
	var values = newYearsCalc;

	var result = {};
	keys.forEach((key, i) => (result[key] = values[i]));
	// Your solution ends here

	return result;
};

console.log(spaceAge(Math.round(Math.random() * 99999999)));
