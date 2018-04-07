function gotGrapes(bags, index = 0, include = 0, exclude = 0) {
  // Base Case: if we've reached the end of the array
  if (index === bags.length) {
    // return the larger of the two sums
    return exclude <= include ? include : exclude;
  }

  // compute value of exclude before include computation to ensure we do not miss an index
  let newSum = exclude <= include ? include : exclude;

  // include is the sum that includes the current index
  // exclude is the larger of the two sums before adding current value
  include = exclude + bags[index];
  exclude = newSum;

  return gotGrapes(bags, index + 1, include, exclude);
}

// Speros walks the stairs at the Dojo multiple times every day.Often he takes 2 stairs at a time, to work his quadriceps; he’s just that way.Other days he mixes it up: with every footstep, he randomly chooses to take 1 stair or 2. You are given an integer representing the total number of stairs.Determine all ways to walk the stairs.Given 4, return [[1, 1, 1, 1], [1, 1, 2], [1, 2, 1], [2, 1, 1], [2, 2]].Solve recursively with no loops.And don’t forget to get yourself some exercise during the bootcamp, as well.

//   Second: assuming you always start with a left foot, return only those ways that end with a right step.So, given 4, you should return [[1, 1, 1, 1], [2, 2]].

//     Third: instead of only returning those that end with a right step, only return those where the total number of steps climbed with left foot equal those climbed with right.So, given 4, you should return [[1, 1, 1, 1], [1, 2, 1], [2, 2]].


function climbingStairs(
  num,
  options = {
    onlyLeft: false, 
    equal: false
  },
  results = [],
  subArr = [],
  leftSum = 0,
  rightSum = 0
) {
  if(num === 0) {
    if(options.onlyLeft && options.equal) {
      if(subArr.length % 2 === 0) {
        if(leftSum === rightSum) {
          results.push(subArr);
        }
      }
    }
    else if(options.onlyLeft) {
      if(subArr.length % 2 === 0) {
        results.push(subArr);
      }
    }
    else if(options.equal) {
      if(leftSum === rightSum) {
        results.push(subArr);
      }
    } else {
      results.push(subArr);
    }
  }
  if(num <= 0) {
    return;
  }

  const left = subArr.length % 2 === 1 ? true : false;

  const sub1 = [...subArr];
  sub1.push(1);
  if(left) {
    climbingStairs(num - 1, options, results, sub1, leftSum + 1, rightSum);
  } else {
    climbingStairs(num - 1, options, results, sub1, leftSum, rightSum + 1);
  }
  
  const sub2 = [...subArr];
  sub2.push(2);
  if(left) {
    climbingStairs(num - 2, options, results, sub2, leftSum + 2, rightSum);
  } else {
    climbingStairs(num - 2, options, results, sub2, leftSum, rightSum + 2);
  }
  return results;
}

module.exports = {
  gotGrapes,
  climbingStairs,
}