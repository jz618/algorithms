/*
Given an array of unsorted numbers and a target number, 
find a triplet in the array whose sum is as close to the target number as possible, 
return the sum of the triplet. 

If there are more than one such triplet, 
return the sum of the triplet with the smallest sum.
*/

function tripletSumCloseTarget(arr, targetSum) {
  let closetSum = Infinity;
  let closetDifference = Infinity;

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    let currentSum = arr[i] + findPair(arr, targetSum - arr[i], i + 1);
    let difference = Math.abs(targetSum - currentSum);

    if (difference < closetDifference) {
      closetDifference = difference;
      closetSum = currentSum
    } else if (difference === closetDifference) {
      closetSum = Math.min(closetSum, currentSum)
    }
  }

  return closetSum
}

function findPair(arr, targetSum, leftPointer) {
  let closetSum = Infinity;
  let closetDifference = Infinity;
  let rightPointer = arr.length - 1;

  while (leftPointer < rightPointer) {
    let currentSum = arr[leftPointer] + arr[rightPointer];

    if (targetSum === currentSum) return currentSum;

    let difference = Math.abs(targetSum - currentSum);

    if (difference < closetDifference) {
      closetDifference = difference;
      closetSum = currentSum
    } else if (difference === closetDifference) {
      closetSum = Math.min(closetSum, currentSum);
    }

    if (targetSum > currentSum) {
      leftPointer++
    } else {
      rightPointer--;
    }
  }

  return closetSum
}