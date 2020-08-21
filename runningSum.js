/*
given an array
write a function that generates the running sums (sometimes called a prefix sum array) of that array

I - an array
O - a second array
C - none
E - if the input array is empty, then the return array is [0]

Input:
[1, 2, 3, 4]

Output:
[1, 3, 6, 10]

*/

// if the input array is []
  // return []
  
// iterate through input array starting at index 1, ending at array length, increment by 1
  // current value is current value + previous value
  
// return the mutated input array

const runningSum = (arr) => {
  for (let idx = 1; idx < arr.length; idx++) {
    arr[idx] += arr[idx - 1];
  }
  /*
  [1, 3, 3, 4]
  [1, 3, 6, 4]
  [1, 3, 6, 10]
  */
  return arr;
} 