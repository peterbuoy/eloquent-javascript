let size = 8;
let string = "#";
// Probably could have used repeat but that wasn't covered yet.
for (let i = 0; i < size - 1; i++) {
	string += " #";
}
// console.log(string);
for (let i = 0; i < size; i++) {
	if (i % 2 == 0) {
      console.log(" " + string);
    } else {
      console.log(string);
    }
}
/* rmk: The hint seems to offer a different solution (nested for loops) 
but I chose another method since the only difference between each 
line is the space in the beginning of the even lines.*/