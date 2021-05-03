/*
Problem Statement 
Given an array of characters where each character represents a fruit tree, 
you are given two baskets, 
and your goal is to put maximum number of fruits in each basket. 

The only restriction is that each basket can have only one type of fruit.

You can start with any tree, 
but you can’t skip a tree once you have started. 
You will pick one fruit from each tree until you cannot, 
i.e., you will stop when you have to pick from a third fruit type.

Write a function to return the maximum number of fruits in both baskets.
*/

/*
i: an array of characters where each character reps a fruit tree
o: an integer rep the max number of fruits in both baskets
c: each basket can only have 1 type of fruit.
can't skip a tree one you're started. pick fruit until can't
e: none
*/

function fruitsInBasket (trees) {
  // initial baskets
  // initial the current max
  // initialize start of window
  const baskets = {};
  let maxFruits = 0,
    windowStart = 0,
    numberOfBaskets = 0;
  // iterate end of window started at index 1
  for (let windowEnd = 0; windowEnd < trees.length; windowEnd++) {
    // if the tree at the window end doesn't exists
      // add as basket
    let currentTree = trees[windowEnd]
    if (!(baskets[currentTree])) {
      baskets[currentTree] = 0;
      numberOfBaskets++;
    }
    // increment fruit in basket
    baskets[currentTree]++;
    // while there are more than two baskets
    while (numberOfBaskets > 2) {
      // decrement fruit count at window start
      let firstFruit = trees[windowStart];
      baskets[firstFruit]--;
      // if ^ cound is now 0, delete the basket
      if (baskets[firstFruit] === 0) {
        delete baskets[firstFruit];
        numberOfBaskets--;
      }
      // increment window start
      windowStart++
    }
    // find new max by comparing current max to the current number of fruits in basket
    maxFruits = Math.max(maxFruits, windowEnd - windowStart + 1);
  }
  // return the max
  return maxFruits;
}


console.log(
  fruitsInBasket(['A', 'B', 'C', 'A', 'C'])
)