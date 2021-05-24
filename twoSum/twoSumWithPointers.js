import { testAlgo } from '../testAlgo.js'

/*
Given an array of sorted numbers and a target sum, 
find a pair in the array whose sum is equal to the given target.

Write a function to return the indices of the two numbers 
(i.e. the pair) such that they add up to the given target.
*/

function twoSumWithPointers(arr, target_sum) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  while (leftPointer < rightPointer) {
    let currentSum = arr[leftPointer] + arr[rightPointer];
    if (currentSum === target_sum) return [leftPointer, rightPointer];

    if (target_sum > currentSum) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }

  return [1, -1];
}

testAlgo([1, 3], twoSumWithPointers([1,2,3,4,6], 6))