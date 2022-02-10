const transcription = (dna) => {
	// code here
	let dnaArr = dna.split("");
	let rnaArr = [];
	for (let i in dnaArr) {
		if (dnaArr[i] == "G") {
			rnaArr.push("C");
		} else if (dnaArr[i] == "C") {
			rnaArr.push("G");
		} else if (dnaArr[i] == "T") {
			rnaArr.push("A");
		} else if (dnaArr[i] == "A") {
			rnaArr.push("U");
		}
	}

	return rnaArr.join("");
};
console.log(transcription("GCT")); //CGA
console.log(transcription("GATC")); //CUAG
