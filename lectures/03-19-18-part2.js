function rainTerraces(arr) {
  //write function here
}

function testRainTerrace(func) {
  var tests = [
    {
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
      given: [8, 7, 6, 5, 4, 3, 2, 1],
      expects: 0
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