// Page 24
// Kyle (smarter than Kenny) notes that the chance of one disaster is totally unrelated to the chance of
// another. Change whatHappensToday() function to create whatReallyHappensToday(). In this
// new function test for each disaster independently, instead of assuming exactly one disaster will happen.
// In other words, with this new function, all five might occur today - or none. Maybe Kenny will survive!


// 10% chance of volcano, 15% chance of tsunami, 20% chance of earthquake,
// 25% chance of blizzard, and 30% chance of meteor strike
function whatReallyHappensToday() {
	var disasterList = [];
	var probV = Math.random();
	var probT = Math.random();
	var probE = Math.random();
	var probB = Math.random();
	var probM = Math.random();
	if(probV < .1) {
		disasterList.push("volcano");
	}
	if(probT < .15) {
		disasterList.push("tsunami");
	}
	if(probE < .20) {
		disasterList.push("earthquake");
	}
	if(probB < .25) {
		disasterList.push("blizzard");
	}
	if(probM < .30) {
		disasterList.push("meteor strike");
	}
	console.log(disasterList);
	if(disasterList.length > 0) {
		console.log("Today Kenny has died in the following accidents: " + disasterList + " ... bummer.");
	} else {
		console.log("Kenny isn't dead!?");
	}
}

whatReallyHappensToday();