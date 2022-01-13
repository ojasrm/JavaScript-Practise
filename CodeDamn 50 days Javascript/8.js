const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
	// write your solution here
	var days =
		(Date.parse(dateText2) - Date.parse(dateText1)) / DAY_IN_MILLISECONDS;
	return days;
}

console.log(
	`Days difference: ${getDaysBetweenDates("10/15/2020", "12/1/2020")}`
);
