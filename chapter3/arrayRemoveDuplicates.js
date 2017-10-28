// Page 38
// Sara is looking to hire an awesome web developer and has received applications from various sources.
// Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate
// values. Because array elements are already in order, all duplicate values will be grouped together. As
// with all these array challenges, do this without using any built-in array methods.

// Second: solve this without using any nested loops.

function arrayRemoveDuplicates(arr) {
	var i = 0;
	while(i < arr.length) {
		if(arr[i] === arr[i + 1]) {
			for(var idx = i + 1; idx < arr.length; idx++) {
				arr[idx] = arr[idx + 1];
			}
			arr.length -= 1;
			i--;
		}
		i++;
	}
	return arr;
}

var array = ["Ben", "Bruce", "Wes", "Wes", "Wes", "Reagan", "Deb", "Grandma", "Grandma"];

arrayRemoveDuplicates(array);

// Without nested loop.

function arrayRemoveDuplicates2(arr) {
	var newIdx = 1;
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] !== arr[i + 1]) {
			arr[newIdx] = arr[i + 1];
			newIdx++;
		}
	}
	arr.length = newIdx - 1;
	return arr;
}

var array2 = ["Ben", "Ben", "Bruce", "Wes", "Wes", "Wes", "Reagan", "Reagan", "Deb", "Grandma", "Grandma"];

arrayRemoveDuplicates2(array2);