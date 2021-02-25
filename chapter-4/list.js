// Implements functions that allow list operations such as
// turning an array into a list,
// turning a list into an array,
// prepending, value to the list,
// and finding the nth value in a list.

function arrayToList(array) {
  let list = {value: array.pop(), rest: null}; // init last value
  // console.log(list);
  while (array.length > 0) { // keep adding values to list until array is empty
    list = {value: array.pop(), rest: list}
  }
  // console.log(list);
  return list;
}

function listToArray(list) {
  // for (init; conditional; post-exec)
  // Init: let the sublist be the rest of the list
  // Conditional: execute the code in the loop as long as the sublist is not null
  // Post-exec: after each loop let the sublist be assigned to the rest of the list
  let array = [];
  for (let sublist = list; sublist; sublist = sublist.rest) {
    array.push(sublist.value);
  }
  return array;
}

function prepend(num, list) {
  return {value: num, rest: list};
}

function nth(list, n) {
  if (n == 0) { // base case (recursed target amount of times)
    return list.value;
  } else { // recursively apply function to rest of list and decrement
    return nth(list.rest, n - 1);
  }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20