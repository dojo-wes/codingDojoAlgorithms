// // Page 88
// You are given an integer representing the number of minutes that have elapsed since midnight.
// You should return a string representing the current time, in traditional spoken convention.
// Use numerals, except specifically the following words: "midnight", "noon", "past", "til", "half",
// and "quarter".
// Examples: if given 30, return "half past midnight". If given 75, return "quarter past 1 am".
// If given 710, return "10 til noon". If given 1000 return "20 til 5pm"

function timeToEnglish(minutes) {
	var words = {
		"midnight": false,
		"noon": false,
		"past": true,
		"til": false,
		"half": false,
		"quarter": false,
		"am": false,
		"pm": true
	}

	var hours = minutes / 60;
	var numDays = 1;

	//cut time to 24 hour block 
	if(hours > 24) {
		numDays = hours / 24;
		hours /= numDays;
	}

	//check for am or pm time
	if(hours < 12 || hours === 24) {
		words.pm = false;
		words.am = true;
		console.log("time in am: " + words.am)
	}

	//find 12 and midnight boolean
	if(hours == 12) {
		words.noon = true;
	} else if(hours == 24 || 0) {
		words.midnight = true;
	}

	//cut to 12 hour time so it is easy to calculate numeral value.
	if(hours > 12) {
		hours /= 2;
	}


	//determine whether to use numeral before or after
	if(hours % 1 > .5) {
		words.til = true;
		words.past = false;
		hours += 1;
	} else if(hours % 1 == 0) {
		words.past = false;
	}

	//
	console.log(words)
	return hours;
}

console.log(timeToEnglish(1200))