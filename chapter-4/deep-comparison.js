// Compares if two objects are equal
// Objects may have nested properties
// Remark: null is not accounted for in this code

function deepEqual (objA, objB) {
  if (objA === objB) return true;
  if (typeof objA != "object" || typeof objB != "object") return false;
  let aKeys = Object.keys(objA);
  let bKeys = Object.keys(objB);
  if (aKeys.length === bKeys.length) {
    for (let key of aKeys) {
      // compare keys in a to keys in b recursively
      if (!bKeys.includes(key) || !deepEqual(objA[key], objB[key])) {
        return false;
      }
    }
    return true;
  } else {
    return false
  }
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true