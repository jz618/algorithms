/*
function to generate all possible combos of R, P, S in a game that's n rounds

I - no input
O - an array containing the possible combos in the form of strings
C - don't hardcode it
E - none

[R, P, S]

result array
combo - tracks the string of the combo

R R R
R R S
R R P

helper function:
I - an initial string, an array
O - no output, side effect -> input array has new values
C - none
E - none
*/

const RPS = (n) => {
  // initialize the resulting array
  // defined possible values - R P S
  
  // define helper function
    // if the input string is three then push it into the input array
    // iterate through possible values 
      // add current value onto the end of the input string
      // call the helper function with same array but the result of ^
      
  // iterate through the possible values
    // call the helper function where the arg result array + current value
    
  // return result array
  
  const result = [];
  const possible = ['R', 'P', 'S'];
  
  const recursive = (arr, someString, n) => {
    if (someString.length >= n) {
      arr.push(someString); 
    } else {
      possible.forEach((value) => {
        recursive(arr, someString + value, n);
      })
    }

    return arr;
  }
  
  return recursive(result, '', n);
}
