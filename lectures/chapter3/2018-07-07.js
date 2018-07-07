// Given a numerical array, reverse the order of values, in -place.The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed.Working ‘in -place’ means that you cannot use a second array – move values within the array that you are given.As always, do not use built -in array functions such as splice().

// create a function that accepts numbered arr
// write a for loop that goes from 0 index to arr.length/2
  // swap current index (i) with arr.lenght-1 -I
// return numbered arr

function reverseArr(arr){
  for(var i = 0;i < arr.length/2; i++ ){
    var temp = arr[i];
    arr[i]= arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
}

var test1 = [1,2,3,4,5];
var test2 = [1,2,3,4,5,6];

console.log(reverseArr(test1));
console.log(reverseArr(test2));

console.log(test1);
console.log(test2);