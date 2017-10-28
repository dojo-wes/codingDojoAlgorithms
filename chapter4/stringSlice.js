String.prototype.slicer = function (start, end) {
	var newString = '';
	//Handle empty parameters
	if(!start) {
		start = 0;
	}
	if(!end) {
		end = this.length;
	}
	//determine whether start and end values are valid
	if(Math.abs(start) > this.length || Math.abs(end) > this.length) {
		return "invalid argument: greater than string length";
	}
	//if start or end are negative values, find their true index.
	if(start < 0) {
		start += this.length;
	}
	if(end < 0) {
		end += this.length;
	}
	//determine whether start and end needs to be swapped to run linearly through for loop
	if(start > end){
		var temp = start;
		start = end + 1; //since start is inclusive and end is exclusive, add 1 for proper indexing
		end = temp + 1; //otherwise user functionality is lost
	}
	for(i = start; i < end; i++) {
		newString += this[i]
	}
	return newString;
}

var str1 = "Hello World";

console.log(str1.slicer(-3, 0));