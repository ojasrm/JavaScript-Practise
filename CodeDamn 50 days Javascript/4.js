const time = "12:10AM";

function convertTo24HrsFormat(time) {
	// write your solution here
	var newTimeHr;
	var newTimeMin;
	var ampm = time.slice(-2);
	var timeSplit = time.split(ampm)[0];
	var timeHr = timeSplit.split(":")[0];
	var timeMin = timeSplit.split(":")[1];
	if (ampm == "AM") {
		if (timeHr == "12") {
			newTimeHr = "00";
		} else if (timeHr.length == 1) {
			newTimeHr = "0" + timeHr;
		} else {
			newTimeHr = timeHr;
		}
	} else {
		if (timeHr == "12") {
			newTimeHr = timeHr;
		} else {
			newTimeHr = (parseInt(timeHr) + 12).toString();
		}
	}
	if (timeMin.length == 1) {
		newTimeMin = "0" + timeMin;
	} else {
		newTimeMin = timeMin;
	}
	return [newTimeHr, newTimeMin].join(":");
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`);
