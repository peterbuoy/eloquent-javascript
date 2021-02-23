/* For the numbers 1 to 100,
print FizzBuzz iff number is divisible by 3 and 5,
print Fizz iff number is divisible by 3
print Buzz iff number is iff divisible bt 5
otherwise print the number itself*/

// naive soln
for (let i = 1; i <= 100; i++) {
	if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    }
  	else if (i % 3 == 0) {
      console.log("Fizz");
    }
  	else if (i % 5 == 0) {
      console.log("Buzz");
    }
  	else {
    	console.log(i);
  	}
}