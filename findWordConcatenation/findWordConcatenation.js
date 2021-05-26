import { testAlgo } from '../testAlgo.js'

/*
Given a string and a list of words
find all the starting indices of substrings in the given string that are a concatenation of all the given words exactly once without any overlapping of words
It is given that all words are of the same length.
*/

/*
Input: String="catfoxcat", Words=["cat", "fox"]
Output: [0, 3]
Explanation: The two substring containing both the words are "catfox" & "foxcat".
*/
function findWordConcatentation(str, words) {
  const indices = [];
  const wordCount = words.length;
  const wordLength = words[0].length;

  if (wordCount === 0 || wordLength === 0) return indices;

  const wordMap = createFrequenceMap(words);
  const maxConcatnationLength = str.length - (wordCount * wordLength) + 1;

  for (let wordStart = 0; wordStart < maxConcatnationLength; wordStart++) {

    const wordsSeen = {};

    for (let j = 0; j < wordCount; j++) {
      let word = makeWord(wordStart, wordLength, j, str)
      
      if (!checkWordValidityAndUpdate(word, wordMap, wordsSeen)) break;
  
      if (j + 1 === wordCount) {
        indices.push(wordStart)
      }
    }
  }

  return indices;
}

function createFrequenceMap (words, map = {}) {
  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (!(word in map)) map[word] = 0;
    map[word]++;
  }

  return map;
}

function makeWord(wordStart, wordLength, remainderStart, str) {
  const nextWordIndex = wordStart + (remainderStart * wordLength)
  return str.substring(nextWordIndex, nextWordIndex + wordLength);
}

function checkWordValidityAndUpdate (word, wordMap, wordsSeen, valid = true) {
  if (!(word in wordMap)) valid = false;

  if (!(word in wordsSeen)) wordsSeen[word] = 0;

  wordsSeen[word]++;

  if (wordsSeen[word] > wordMap[word] || 0) valid = false;

  return valid;
}

