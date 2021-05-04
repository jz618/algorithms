const expect = require('chai')

/* 
Problem Statement #
Given an array containing 0s and 1s, 
if you are allowed to replace no more than ‘k’ 0s with 1s, 
find the length of the longest contiguous subarray having all 1s.

Input: Array=[0, 1, 1, {0, 0, 0, 1, 1, 0, 1, 1], k=2
Output: 6

windowStart = 2
windowEnd = 6
onesInWindow = 0

currentQuota = size of the window - ones in the window
3 

longestSubstring = 4
Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.
*/

/*
i: an array containing 1s and/or 0s, an integer rep the replacements of 0s to 1s
o: an integar rep the longest substring of 1s taking into acc replacements
c: none
e: none

*/
function longestSubstringoOfOnes(arr, k) {
  // initial the start of the window, counter of the ones in the window and the running longest subarray
  let windowStart = 0,
  onesInWindow = 0,
  longestValidSubstring = 0;
  // iterate through the array
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // if the current char is a 1 then iterate the ones counter
    let leftChar = arr[windowEnd];
    if (leftChar === 1) onesInWindow++;

    let currentQuota = windowEnd - windowStart + 1 - onesInWindow;
    // calculate the current quota
    if (currentQuota > k) {
    // if the current quota exceeds k
      // if the char at the start is 1 -> decrement the ones counter
      let rightChar = arr[windowStart];
      if (rightChar === 1) onesInWindow--;
      windowStart++;
      // increment the window start
    }
    // re-eval the longest substring
    longestValidSubstring = Math.max(longestValidSubstring, windowEnd - windowStart + 1);
  }

  return longestValidSubstring;
}