function rainTerraces(arr) {
  if (arr.length < 3) {
    return 0;
  }
  var start = 0,
    end = arr.length - 1,
    water = 0,
    leftMax = 0,
    rightMax = 0;

  while (start < end) {
    while (start < end && arr[start] <= arr[start + 1]) {//loop to find local left maximum
      start++;
    }
    leftMax = arr[start];//set local left maximum

    while (end > start && arr[end] <= arr[end - 1]) {//loop to find local right maximum
      end--;
    }
    rightMax = arr[end];//set local right maximum

    if (leftMax < rightMax) {
      //here we scan to the right from maximum, counting water as we pass by
      //unless we find an equal or a larger maximum
      start++;
      while (start < end && arr[start] <= leftMax) {
        water += leftMax - arr[start];
        start++;
      }
    } else {
      //same as above but reversed
      end--;
      while (end > start && arr[end] <= rightMax) {
        water += rightMax - arr[end];
        end--;
      }
    }
  }
  return water;
}

function testRainTerrace(func) {
  var tests = [{
    given: [3, 1, 1, 4, 2],
    expects: 4
  },
  {
    given: [1, 1, 1, 1, 1],
    expects: 0
  },
  {
    given: [],
    expects: 0
  },
  {
    given: [12, 1, 12, 1, 12],
    expects: 22
  },
  {
    given: [12, 11, 10, 9, 8],
    expects: 0
  },
  {
    given: [3, 1, 2, 1, 4, 2, 1],
    expects: 5
  },
  {
    given: [1, 2, 3, 4, 5, 6, 7, 8],
    expects: 0
  },
  {
    given: [8, 4, 3, 10, 7, 3, 2, 6],
    expects: 16
  },
  {
    given: [4, 3, 2, 1, 3, 2, 1],
    expects: 3
  }
  ];
  var result;
  for (var test of tests) {
    result = func(test.given);
    if (result === test.expects) {
      console.log("------------------------------------");
      console.log("SUCCESS", test.given);
    } else {
      console.log("------------------------------------");
      console.log("FAILURE", test.given);
      console.log("Expected: ", test.expects);
      console.log("Returned: ", result);
    }
  }
}

// testRainTerrace(rainTerraces);

module.exports = rainTerraces;