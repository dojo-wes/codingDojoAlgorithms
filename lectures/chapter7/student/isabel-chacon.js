function rainTerraces(arr) {

  var start = false; //Found beginning of bucket
  var end = false; //Found end of bucket
  var startIndex = 0; //Bucket initial index
  var startHeight = 0; //Bucket initial Height

  var bucketLength = 0; //Bucket horizontal size
  var maxHeight = 0; //Max height to determine end of bucket
  var maxIndex = 0; //Max height index

  var localSum = 0; //Water inside bucket
  var totalSum = 0; //Total water

  for (var i = 0; i < arr.length; i++) {

    //Find Start of Bucket
    if (!start) {
      if (arr[i] > arr[i + 1]) {
        startIndex = i;
        startHeight = arr[i];
        start = true;
        continue;
      }
      continue;
    }
    //Found start on bucket, assume end of bucket will be same height and start adding!
    if (arr[i + 1]) {
      if (arr[i] < startHeight) {
        if (arr[i] >= maxHeight) {
          maxHeight = arr[i];
          maxIndex = i;
        }
        localSum += (startHeight - arr[i]);
        bucketLength++;
        end = false;
        //console.log(localSum);
      }

      //How to determine end of bucket when it never reaches equal height
      else {//Reached end of current bucket
        bucketLength = 0;
        totalSum += localSum;
        localSum = 0;
        startHeight = arr[i];
        startIndex = i;
        end = true; //Found end of bucket
      }
    }
    else {//Reached end of array
      if (!end) { //Last bucket was never closed
        if (i > maxIndex && arr[i] > arr[i - 1]) {
          //maxHeight is not at end of array
          var lenlocal = maxIndex - startIndex;
          var difference = (startHeight - maxHeight) * lenlocal;
          localSum -= difference;

          if (maxIndex - startIndex == 1 && i - maxIndex > 1) {
            maxHeight = startHeight;
            maxIndex++;
          }

          lenlocal = i - maxIndex;
          difference = (maxHeight - arr[i]) * lenlocal;
          localSum -= difference;
        }
        else if (arr[i] < startHeight) {
          var difference = (startHeight - maxHeight) * bucketLength;
          localSum -= difference;
        }
        totalSum += localSum;
      }
      if (maxIndex > 1) {
        return totalSum;
      }
      else {
        return 0;
      }
    }
  }
  return 0;
}

module.exports = rainTerraces;