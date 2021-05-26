function wordCountEngine(document) {
  // your code goes here
  
  // convert document to array
  // initialize the tracker object
  // iterate through the array
    // convert the current character to lowercase
    // replace non word character with ''
    // add word to tracker object or increase existing
  // initialize the result
  // iterate through the tracker object
    // push array with key and value pair
  // return the result
  
  const docArr = document.split(' '),
        tracker = {};

  for (let i = 0; i < docArr.length; i++) {
    let newEntry = docArr[i].toLowerCase();
    if (newEntry.length === 0) continue;
    const regex = /[^a-z]/g;
    newEntry = newEntry.replace(regex, '');
    if (!tracker[newEntry]) {
      tracker[newEntry] = 1;
    } else {
      tracker[newEntry]++;
    }
  }
  
  const inverseTracker = {};

  for (let word in tracker) {
    let wordCount = tracker[word];
    console.log({word, wordCount})
    if (!inverseTracker[wordCount]) {
      inverseTracker[wordCount] = [word]
    } else {
      inverseTracker[wordCount].push(word)
    }
  }

  let temp = Object.keys(inverseTracker);
  const result = [];

  for (let j = temp.length - 1; j > -1; j--) {
    let wordCount = temp[j];
    inverseTracker[wordCount].forEach(value => {
      result.push([value, wordCount])
    })
  }
  return result;
}
