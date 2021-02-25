// Reverses an array by returning a reversed copy
// or reversing an array in place

function reverseArray(array) {
  rArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    rArray.push(array[i]);
  }
  return rArray;
}

function reverseArrayInPlace(array) {
  let i = 0;
  // even num elements
  if (array.length % 2 === 0) {
    for (let i = 0; i <= array.length / 2 - 1; i++) {
      let temp = array[i];
      array[i] = array[array.length - 1 - i];;
      array[array.length - 1 - i] = temp;
    }
  } else {
    for (let i = 0; i < Math.floor(array.length / 2) - 1; i++) {
      let temp = array[i];
      array[i] = array[array.length - 1 - i];;
      array[array.length - 1 - i] = temp;
    }
  }
   return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
let arrayValue2 = [1, 2, 3, 4, ];
reverseArrayInPlace(arrayValue2);
console.log(arrayValue2);
// → [4, 3, 2, 1]