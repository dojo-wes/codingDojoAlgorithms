// Page 20
// Kelvin wants to convert between temperature scales. Create fahrenheitToCelcius(fDegrees)
// that accepts a number of degrees in Fahrenheit and returns the equivalent temperature as expressed
// in Celsius degrees. For review, Fahrenheit = (9/5 * Celcius) + 32.

function fahrenheitToCelcius(fDegrees) {
	var cDegrees = (fDegrees - 32) * 5/9;
	return cDegrees;
}

fahrenheitToCelcius(75);