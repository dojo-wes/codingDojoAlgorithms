//bracesvalid

function bracesValid(str) {
	var braces = {
			')':'(',
			']':'[',
			'}':'{'
	};
	var opens = [];
	for (var i = 0; i < str.length; i++) {
		if (str[i] == '(' || str[i] == '{' || str[i] =='[') {
			opens.push(str[i]);
		}
		else if (str[i] == ')' || str[i] == '}' || str[i] ==']') {
			if (opens.pop() != braces[str[i]]) {
				return false;
			}
		}
	}
	return !opens.length;
}

//"({[]})" = true
//"({[)]}" = false
//"()[]{}" = true
//(hello){its me [whatever]} = true
//false
var str1 = "({[]})"
var str2 = "({[)]}"
var str3 = "()[]{}"
var str4 = "(hello){its me [whatever]}"
var str5 = "(hello){its me [whatever]}("

console.log(bracesValid(str1));
console.log(bracesValid(str2));
console.log(bracesValid(str3));
console.log(bracesValid(str4));
console.log(bracesValid(str5));