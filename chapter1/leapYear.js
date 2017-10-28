//Page 16
//Write a function that determines whether a given year is a leap year.
//If a year is divisible by four, it is a leap year, unless it is divisible by 100.
//However, if it is divisible by 400 then it is.

function isLeapYear(year) {
	if((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
		console.log("Yep, that's a leap year.")
	} else {
		console.log("Nah, that's not a leap year.")
	}
}

isLeapYear(2000);
isLeapYear(1991);
isLeapYear(400);
isLeapYear(500);