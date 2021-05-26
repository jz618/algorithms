var twoSum = function(nums, target) {
  const numsObj = {};
  
  for (let i = 0; i < nums.length; i++) {
    numsObj[nums[i]] = i;
  }

  for (let j = 1; j < nums.length; j++) {
    let difference = target - nums[j];

    if (numsObj.hasOwnProperty(difference) && numsObj[difference] !== j){
      return [numsObj[difference], j]
    }
  }
};