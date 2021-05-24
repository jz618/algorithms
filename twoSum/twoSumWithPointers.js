import { testAlgo } from '../testAlgo.js'

/*
Given an array of sorted numbers and a target sum, 
find a pair in the array whose sum is equal to the given target.

Write a function to return the indices of the two numbers 
(i.e. the pair) such that they add up to the given target.
*/

function twoSumWithPointers(arr, targetSum) {
  const pointer = {
    left: 0,
    right: arr.length - 1
  };

  while (pointer.left < pointer.right) {
    let currentSum = arr[pointer.left] + arr[pointer.right];
    if (currentSum === targetSum) return [pointer.left, pointer.right];
    updatePointers(pointer, targetSum, currentSum);
  }

  return [1, -1];
}

function updatePointers(pointer, targetSum, currentSum) {
  if (targetSum > currentSum) {
    pointer.left++;
    return;
  }
  
  pointer.right--;
}
testAlgo([1, 3], twoSumWithPointers([1,2,3,4,6], 6))