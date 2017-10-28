// Page 40
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right
// by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is
// lost. Operate in-place: given ([1,2,3], 1), change the array to [3,1,2]. Don't use built-in functions.
// 	Second: allow negative shiftBy(shift L, not R).
// 	Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// 	Fourth: minimize the touches of each element.

function arrayRotate(arr, shiftBy) {
	shiftBy = shiftBy % arr.length;
}