function hash(str) {
	var newStr = '';
	for(var i = 0; i < str.length; i++) {
		newStr += str.charCodeAt(i);
	}
	var newInt = parseInt(newStr);
	newInt *= str.length;

	if(newInt > 10e+15) {
		newInt = newInt % 10e+15;
	}

	return newInt;
}

var string1 = "hey";
var string2 = "hey";
var string3 = "Whaaaaat";
var string4 = "ballaksdfhapiojqwer;ladfjspoihqweflkjahsdfkhqwefus"

console.log(hash(";lkajsdf;lkadjsfqhqhwpoeoiwoihqwefpoihasd"));
console.log(hash(string2));
console.log(hash(string3));
console.log(hash(string4));
//Uppercase 65-90 inclusive, lowercase 97-122 inclusive