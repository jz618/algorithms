import { testAlgo } from '../testAlgo.js'

/*
Problem:
Given a string and a pattern, find out if the string contains any permutation of the pattern.
*/

function findPermutation(str, pattern) {
  const frequencyMap = createFreqeuncyMap(pattern);
  let windowStart = 0;
  let matched = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd];

    matched = matchRightCharacter(rightChar, frequencyMap, matched)
    if (matched === frequencyMap.size) return true;
    
    if (windowEnd >= pattern.length - 1) {
      let leftChar = str[windowStart];
      matched = updateLeftCharacter(leftChar, frequencyMap, matched)
      windowStart++;
    }
  }
  return false
}

function createFreqeuncyMap(string, map = {size: 0}) {
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (!(char in map)) {
      map[char] = 0
      map.size++;
    };
    map[char]++
  }
  return map;
}

function matchRightCharacter(char, map, match) {
  if (char in map) {
    map[char]--;
    if (map[char] === 0) match++;
  }
  return match;
}

function updateLeftCharacter(char, map, match) {
  if (char in map) {
    if (map[char] === 0) match--;

    map[char]++;
  }
  return match;
}

testAlgo(true, findPermutation('aaacb', 'abc'))
testAlgo(true, findPermutation('bcdxabcdy', 'bcdyabcdx'))
testAlgo(true, findPermutation('oidbcaf', 'abc'))