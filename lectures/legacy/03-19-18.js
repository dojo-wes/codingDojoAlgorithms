function rainTerraces(arr) {
  firstIdx = 0;
  var currHigh = arr[firstIdx];
  endIdx = 0;
  var endHigh = arr[endIdx];
  for(var i = 0; i < arr.length; i++) {
    if(arr[firstIdx] >= arr[i]) {
      firstIdx = i + 1;
      currHigh = arr[firstIdx];
    } else if(arr[i] >= currHigh) {
      endIdx = i;
      endHigh = arr[endIdx];
    }
  }
}