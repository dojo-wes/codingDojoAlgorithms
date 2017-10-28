function coinChange(cents, legend) {
	var result = {
		"quarters": 0,
		"dimes": 0,
		"nickels": 0,
		"pennies": 0
	}
	var change = cents;
	result.quarters = Math.floor(change/legend.quarters);
	change -= result.quarters * legend.quarters;
	result.dimes = Math.floor(change/legend.dimes);
	change -= result.dimes * legend.dimes;
	result.nickels = Math.floor(change/legend.nickels);
	change -= result.nickels * legend.nickels;
	result.pennies = change;
	return result;
}

var americanCurrency = {
	"quarters": 25,
	"dimes": 10,
	"nickels": 5,
	"pennies": 1
}

//see how many key value pairs there are
//sort biggest to smallest
//iterator with same method
//return an object with same keys as legend and accurate values
//for generic legend

var genericLegend = {}

console.log(Object.keys(americanCurrency))
console.log(coinChange(42, americanCurrency))