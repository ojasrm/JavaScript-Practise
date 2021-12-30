function hey(message) {
	// Code here
	if (message == "How are you?") {
		return "Sure.";
	} else if (message.toUpperCase() == message) {
		return "Whoa, chill out!";
	} else if (message.includes("?")) {
		return "Calm down, I know what I'm doing!";
	} else if (message == "") {
		return "Fine. Be that way!";
	} else {
		return "Whatever.";
	}
}
