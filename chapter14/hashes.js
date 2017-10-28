function HashTable(size) {
	this.size = size;
	this.table = [];
}

HashTable.prototype.add = function(key, value) {
	if(key instanceof Array) {
		var hash = key[0];
		value = key[1];
	} else {
		var hash = this.hash(key);
	}
	var idx = hash % this.size;

	if(!this.table[idx]) {
		this.table[idx] = [];
	}

	for(var i = 0; i < this.table[idx].length; i++) {
		if(this.table[idx][i][0] === hash) {
			this.table[idx][i][1] = value;
			return this;
		}
	}

	this.table[idx].push([hash, value]);
	return this;
}

HashTable.prototype.hash = function(key) {
	var newStr = '';
	for(var i = 0; i < key.length; i++) {
		newStr += key.charCodeAt(i);
	}
	var newInt = parseInt(newStr);
	newInt *= key.length;

	if(newInt > 10e+15) {
		newInt = newInt % 10e+15;
	}
	// console.log(newInt);
	return newInt;
}

HashTable.prototype.find = function(key) {
	if(this.isEmpty()) {
		return undefined;
	}

	var hash = this.hash(key);
	var hashIdx = hash % this.size;
	for(var i = 0; i < this.table[hashIdx].length; i++) {
		if(this.table[hashIdx][i][0] === hash) {
			return this.table[hashIdx][i][1];
		}
	}
	return undefined;
}

HashTable.prototype.remove = function(key) {
	if(this.isEmpty()) {
		return null;
	}

	var hash = this.hash(key);
	var hashIdx = hash % this.size;
	for(var i = 0; i < this.table[hashIdx].length; i++) {
		if(this.table[hashIdx][i][0] === hash) { 
			// console.log(this.table[hashIdx]);
			var result = this.table[hashIdx].splice(i, 1)[0][1];
			if(!this.table[hashIdx].length) {
				this.table[hashIdx] = undefined;
				var clear = true;
				for(var j = 0; j < this.table.length; j++) {
					if(this.table[j]) {
						// console.log("breaking")
						clear = false;
						break;
					}
				}
				if(clear) {
					this.table = [];
				}
				// console.log("Broke to here!")
			}
			// console.log(this.table[hashIdx]);
			return result;
		}
	}
	return null;
}

HashTable.prototype.isEmpty = function() {
	return !this.table.length;
}

HashTable.prototype.loadFactor = function() {
	if(this.isEmpty()) {
		return null;
	}

	var numElements = [];

	for(var i = 0; i < this.table.length; i++) {
		if(this.table[i]) {
			numElements.push(this.table[i].length);
		}
	}

	console.log(numElements);
	var average = 0;
	for(var i = 0; i < numElements.length; i++) {
		average += numElements[i] / numElements.length;
	}
	console.log(this.size - numElements.length, "this is the number of empty buckets");
	console.log(numElements.length, "this is the number of full buckets");
	console.log(average, "this is the average");
	return average;
}

HashTable.prototype.setSize = function(size) {
	if(this.isEmpty()) {
		return null;
	}

	var newHT = new HashTable(size);
	for(var i = 0; i < this.table.length; i++) {
		if(this.table[i]) {
			for(var j = 0; j < this.table[i].length; j++) {
				newHT.add(this.table[i][j]);
			}
		}
	}
	
	this.size = size;
	// console.log(this.table, "\n before setSize");
	this.table = newHT.table;
	// console.log(this.table, "\n after setSize");
	return this;
}

HashTable.prototype.safeSelectKeys = function(arr) {
	var newHash = new HashTable(this.size);
	for(var i = 0; i < arr.length; i++) {
		var found = this.find(arr[i]);
		if(!(found === undefined)) {
			newHash.add(arr[i], found);
		}
	}
	return newHash;
}

HashTable.prototype.selectKeys = function(arr) {
	var newHash = new HashTable(this.size);
	for(var i = 0; i < arr.length; i++) {
		var found = this.find(arr[i]);
		if(!(found === undefined)) {
			newHash.add(arr[i], found);
		}
	}
	this.table = newHash.table;
	return this;
}

var h = new HashTable(10);
// console.log(h.isEmpty())
// console.log(h.loadFactor());
h.add("key", 2).add("one", false).add("name", "Todd").add("key", 5).add("dinner", "pizza").add('favoriteNumber', 11).add("color", "fucshia").add("book", "1984").add("song", "apple").add("computer", "apple").add("fruit", "apple").add("os", "linux?");
// console.log(h);
// console.log(h.loadFactor());
h.setSize(15);
// console.log(h);
var log = console.log;
log(h.table);
var newOne = h.selectKeys(['key', 'one', 'name']);
log(h.table);