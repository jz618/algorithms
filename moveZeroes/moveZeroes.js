/*
I - an array
O - re-organized version of that array
C - O(n) time constrait: function needs to be in place
E - none
*/

const moveZeroes = function(nums) {

  // iterate through array backwards
  // if the current value is 0
    // remove it
    // add a 0 to the end
  // return the  array
  
  for (let i = nums.length - 1; i > -1; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }

  return nums;
};