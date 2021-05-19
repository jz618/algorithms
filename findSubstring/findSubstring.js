import { testAlgo } from '../testAlgo.js'
/*
Smallest Window containing Substring 

Given a string and a pattern, find the smallest substring in the given string which has all the characters of the given pattern.
*/

function findSubstring(str, pattern) {
  const frequencyMap = createFreqeuncyMap(pattern);
  let foundMatch = false;
  let windowStart = 0;
  let matched = 0;
  let smallestSubstring = str;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {

    matched = updateRightCharMatch(str[windowEnd], frequencyMap, matched)

    while (matched === frequencyMap.size) {
      foundMatch = true;
      smallestSubstring = updateSmallestString(smallestSubstring, str.substring(windowStart, windowEnd + 1))

      matched = updateLeftCharMatch(str[windowStart], frequencyMap, matched)
      windowStart++;
    }
  }

  return smallestSubstring;
}

function createFreqeuncyMap(string, map = {size: 0}) {
  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (!(char in map)) {
      map[char] = 0;
      map.size++;
    }
    map[char]++;
  }
  return map;
}

function updateRightCharMatch(char, map, match) {
  if (char in map) {
    map[char]--;
    if (map[char] === 0) match++
  }
  return match;
}

function updateSmallestString(smallest, current) {
  return current.length <= smallest.length ? current : smallest;
}

function updateLeftCharMatch(char, map, match) {
  if (char in map) {
    if (map[char] === 0) match--;
    map[char]++
  }

  return match;
}

testAlgo("bca", findSubstring("abdbca", "abc"))