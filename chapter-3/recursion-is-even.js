// Determines if a number is even using recursion

function isEven(num) {
  // edge case for negative numbers
  if (num < 0) {
    num *= -1;
  }
  if (num == 0) {
    return true;
  }
  else if (num == 1) {
    return false;
  } else { 
    /*This is based on even numbers having the form 2n where n is some integer
    along with odd numbers having the form 2n - 1 where n is some integer.
    Subtracting the given number num by 2 will lead you to one of the base cases.*/
    return isEven(num - 2);
  }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false
console.log(isEven(-2));
// → true