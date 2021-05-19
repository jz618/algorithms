import { testAlgo } from '../testAlgo.js'

/*
Write a function to return a list of starting indices of the anagrams of the pattern in the given string.
*/

function findStringAnagrams(str, pattern) {
  const frequencyMap = constructFrequencyMap(pattern);
  let startingIndices = [];
  let windowStart = 0;
  let matched = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    matched = updateWindowEnd(str[windowEnd], frequencyMap, matched)

    if (matched === frequencyMap.size) startingIndices.push(windowStart);

    if (windowEnd >= pattern.length - 1) {
      matched = updateWindowStart(str[windowStart], frequencyMap, matched)
      windowStart++;
    }
  }

  return startingIndices;
}

function constructFrequencyMap(str, map = {size: 0}) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (!(char in map)) {
      map[char] = 0
      map.size++;
    };

    map[char]++
  }
  return map;
}

function updateWindowEnd(char, map, matched) {
  if (char in map) {
    map[char]--;

    if(map[char] === 0) matched++;
  }
  return matched;
}

function updateWindowStart(char, map, matched) {
  if (char in map) {
    if (map[char] === 0) matched--;
    map[char]--;
  }

  return matched;
}
testAlgo([1, 2], findStringAnagrams("ppqp", "pq"))