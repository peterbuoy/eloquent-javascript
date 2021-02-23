// Determines the minimum value given two values

// Ternary operator and arrow functions could make this a one liner.
// Would arrow functions make it easier to understand though?

// Let's try a function declaration first
function min(a, b) {
  return (a < b) ? a : b;
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

// Arrow function
let minArrow = (a, b) => (a < b) ? a : b;
console.log(minArrow(0, 10));
// → 0
console.log(minArrow(0, -10));
// → -10