// This program implements the range function that returns an array
// of numbers within a range while allowing for pos/neg steps.
// It also allows you to sum the values of an array.

function range(start, end, step = 1) {
  array = [];
  if (step < 0) {
    for (let i = start; i >= end; i += step) {
      array.push(i);
    }
  } else {
    for (let i = start; i <= end; i += step) {
    	array.push(i);
  	}
  }
  return array;
}

function sum(array) {
  let sum = 0;
  for (let i of array) {
    sum += i;
  }
  return sum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55