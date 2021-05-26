function isValidSubsequence(array, sequence) {
  // I - two arrays
  // O - boolean
  // E - none
  // C - none

  // initialize array pointer
  // initalize seq validator

  // as long as within bounds of the array and sequence
    // if value at the seq validator is the same as the value at the array pointer, increase the seqValidator
    // increase the array pointer

  // return whether or not we traversed through the entirety of the seq array

  let arrayPt = 0, seqPt = 0;

  while (arrayPt < array.length && seqPt < sequence.length) {
    if (sequence[seqPt] === array[arrayPt]) seqPt++;
    arrayPt++;
  }

  return seqPt === sequence.length;
}