import { testAlgo } from '../testAlgo.js'

/*
Given an array of unsorted numbers, find all unique triplets in it that add up to zero.
*/

const tripletSumToZero = function(arr) {
  const triplets = [];

  arr.sort((a, b) => a - b)
  console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    findPairs(arr, -arr[i], i + 1, triplets)
  }

  return triplets
};

function findPairs(arr, targetSum, leftPointer, triplets) {
  let rightPointer = arr.length - 1;

  while(leftPointer < rightPointer) {
    let rightValue = arr[rightPointer];
    let leftValue = arr[leftPointer]
    let currentSum = rightValue + leftValue;
    console.log({targetSum, rightValue, leftValue})
    if (targetSum === currentSum) {
      triplets.push([-targetSum, leftValue, rightValue])
      leftPointer++;
      rightPointer--;
    } else if (targetSum > currentSum) {
      leftPointer++
    } else {
      rightPointer--;
    }

    console.log({leftPointer, rightPointer})
  }
}