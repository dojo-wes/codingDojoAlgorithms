

module.exports = function recurRainTerraces(arr, high1=0, high2=0, totalRain=0){
  //fast fail
  if (arr.length < 3){
      return totalRain;
  }
  let buildingArea = 0;

  // find left edge of first box
  while (arr[high1] <= arr[high1+1]){
      high1++;
      // fast fail for if buildings just gets taller with no drop off
      if (high1 == arr.length-1){
          return totalRain;
      }
  }
  high2 = high1;

  //find low right of current box add building area along the way
  while (arr[high2 + 1] <= arr[high2]){
      high2++;
      buildingArea += arr[high2];
      //fast fail for if it never goes back up
      if (high2 == arr.length-1){
          return totalRain;
      }
  }

  //now move right pointer up while it is less than left high or you get to end of arr
  while (arr[high2] < arr[high1]){ 
      high2++;
      buildingArea += arr[high2];
      // if we fund the end of the array we need to break out and collect rain
      if (high2 == arr.length-1){
          break;
      } 
  }
  // we actually dont want that last building because that is our new high 2 so lets subtract it
  buildingArea -= arr[high2];

  // here we need to check for one spacific condition that if we forget to check for the left pointer will move all the way over to the right. -->haven't figured yet how to combine this with the above condition to make more efficent..
  //this will move the left high back in the case that it reached the end of the array and there was a dropoff
  while (arr[high2] <= arr[high2-1]){
      high2--;
      buildingArea -= arr[high2];
  }

  // now we check to see if left side(+1) is higher than right and if so move left untill its next is = or lower , dont forget to subtract those buildings if we mover the left pointer over.
  while (arr[high1 +1] >= arr[high2]){
      buildingArea -= arr[high1 + 1];
      high1++;
  }

  // make a bucket
  let bucketHeight;
  if (arr[high1] > arr[high2]){
      //check to make shure that this wasn't the very last building and it did a drop off...
      bucketHeight = arr[high2];
  } else {
       bucketHeight = arr[high1];
  }
   width = high2 - high1 - 1;
  totalRain += (width * bucketHeight) - buildingArea;

  //now if high2 < arr.length lets recursivly call our function wiht the new starting positions both starting from high2
  if (high2 < arr.length-1){
      return recurRainTerraces(arr, high2, high2, totalRain);
  }
  //otherwise we return the rain
  return totalRain;
}