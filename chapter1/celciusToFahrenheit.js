// Page 20
// Create celciusToFahrenheit(cDegrees) that accepts number of degrees Celcius and returns the equivalent
// temperature expressed in degrees Fahrenheit.

// (optional) Do Fahrenheit and Celcius values equate at a certain number? Scientific calculation can be
// complex, so for this challenge just try a series of Celcius integer values starting at 200, going
// downward (descending), checking whether it is equal to the corresponding Fahrenheit value.

function celciusToFahrenheit(cDegrees) {
	fDegrees = (cDegrees * 9/5) + 32;
	return fDegrees;
}

celciusToFahrenheit(15);

function findEquilibrium() {
	fDegrees = 0;
	for(var i = 200; i != fDegrees; i--) {
		fDegrees = ((i -1) * 9/5) + 32;
		// console.log(i);
	}
	console.log(i + " degrees is the equilibrium point.");
}

findEquilibrium();

//rewrite as while loop for practice

function findEquilibrium2() {
	var fDegrees = 0;
	var cDegrees = 200;
	while(cDegrees != fDegrees) {
		fDegrees = ((cDegrees -1) * 9/5) + 32;
		// console.log(cDegrees);
		cDegrees--;
	}
	console.log(cDegrees + " degrees is the equilibrium point");
}

findEquilibrium2();