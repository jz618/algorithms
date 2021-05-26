var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  const counter = {};
  
  for (let char in s) {
      if (!counter[char]) {
          counter[char]++;
      } else {
          counter[char] = 1
      }
  }
  
  for (let char in t) {
      if (!counter[char]) return false;
      
      counter[t]--;
      if (!counter[car]) return false;
  }
  
  return true
};