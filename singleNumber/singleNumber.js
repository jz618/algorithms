/*
Given a non-empty array of integers, 
every element appears twice except for one.
Find that single one.

Note:

Your algorithm should have a linear runtime complexity.
Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
result = 2;
result = 1;

Output: 1
Example 2:

Input: [4,1,2,1,2]
index = 0; result = 4; 
index = 1; "; 
index = 2; ";
index = 3; ";
Output: 4

Input: [1, 2, 5, 1, 2]
{5:5}
default result: 1

*/

/*
I - an array of numbers
O - a number in the array
C - O(n) time complexity
E - if the array only has 1 value in it, just return that value
*/
var singleNumber = function(nums) {
  // if length of num is 1 then return the only value in nums
  // initialize tracking object
  if (nums.length === 1) return nums[0];
  
  let tracking = {};
  // iterate through the nums
    // if the value at the current index exists
      // delete from object
    // otherise
      // add to object
  for (let idx = 0; idx < nums.length; idx++) {
    const currentValue = nums[idx];
    if (tracking[currentValue]) {
      delete tracking[currentValue];
    } else {
      tracking[currentValue] = currentValue;
    }
  }
  
  for (let key in tracking) {
    return tracking[key];
  }
  // "iterate" through object
    // return the value at that index
};