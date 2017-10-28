// Page 24
// Kenny Tries to stay safe, but somehow every day something happens.
// If there is a 10% chance of volcano, 15% chance of tsunami, 20% chance of earthquake,
// 25% chance of blizzard, and 30% chance of meteor strike, 
// write function whatHappensToday() to print the outcome.

function whatHappensToday() {
	var disaster;
	var randNum = Math.random();
	if(randNum < .1) {
		disaster = "volcano";
	} else if(randNum < .25) {
		disaster = "tsunami";
	} else if(randNum < .45) {
		disaster = "earthquake";
	} else if(randNum < .70) {
		disaster = "blizzard";
	} else if(randNum < 1) {
		disaster = "meteor strike";
	}
	console.log("Today Kenny has died in a " + disaster + " ... bummer.");
}

whatHappensToday();