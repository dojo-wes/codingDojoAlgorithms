// Page 24
// Cartman doesn't really like math class and needs help. You are given two numbers - the coefficients m
// and b in the equation y = mx + b. Build a function that returns the x-intercept (Cartman's older cousin
// Charlie wisely reminds him that x-intercept is the value of x where y equals zero, but he just scoffs).

function getXInt(m, b) {
	var xInt = -b / m;
	return xInt;
}

getXInt(10, -22);