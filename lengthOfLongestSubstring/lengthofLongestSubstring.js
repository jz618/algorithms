/*
Problem Statement #
Given a string with lowercase letters only, 
if you are allowed to replace no more than ‘k’ letters with any letter, 
find the length of the longest substring having the same letters after replacement.

Input: String="|aabccbb", k=2
store {a: 2, b: 1, c: 1}
longest: 2
maxRepeating: 2
start: 0
Output: 5
Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".
*/

/*
i: a string with lowercase letters, an integer representing the number of replacement allowed
o: an integer representing the lenght of the longest substring
c: none
e: none
*/
function lengthOfLongestSubstring(str, k) {
  // initial start of window, longest substring with replacement, max repeated substring
  let start = 0,
    longest = 0,
    maxRepeating = 0;
  // initial character counter
  const characterCount = {};
  // iterate through string
  for (let end = 0; end < str.length; end++) {
    let endChar = str[end];
    // if the end character isn't in the character counter, add it in
    if (!(endChar in characterCount)) characterCount[endChar] = 0;
    characterCount[endChar]++;
    // re-eval the highest character count
    maxRepeating = Math.max(maxRepeating, characterCount[endChar]);

    // the change quota is the window size - the highest character count
    let changeQuota = end - start - maxRepeating + 1;
    // if the change quota is greater than k
      // decrement the char count of the char at the start of the window
      // incremend the window start
    if (changeQuota > k) {
      let startChar = str[start];
      characterCount[startChar]--;
      start++;
    }

    // re eval the longest substring with replacement
    longest = Math.max(longest, end - start + 1);
  }

  return longest;
}