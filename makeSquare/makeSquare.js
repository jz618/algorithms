import { testAlgo } from '../testAlgo.js'

/*
Given a sorted array, 
create a new array containing squares of all the numbers of the input array in the sorted order.
*/

function makeSquare(arr) {
  const squared = Array(arr.length);
  let currentSquareIndex = arr.length - 1;
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer < rightPointer) {
    let rightSquare = arr[rightPointer] ** 2;
    let leftSquare = arr[leftPointer] ** 2;
    if (currentSquareIndex === 1) {
      squared[1] = Math.max(rightSquare, leftSquare);
      squared[0] = Math.min(rightSquare, leftSquare);
      return squared;
    }

    let currentSquare = Math.max(rightSquare, leftSquare)
    squared[currentSquareIndex] = currentSquare;
    if (currentSquare === rightSquare) {
      rightPointer--;
    } else {
      leftPointer++;
    }

    currentSquareIndex--;
  }
}

console.log(makeSquare([-2, -1, 0, 2, 3]))