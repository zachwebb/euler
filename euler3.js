/*The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

Just solve for numbers smaller than 1,000 and don't worry about making it efficient. You won't need to do any crazy math -- think iteration and make the computer do the work. Consider it extra credit to make your solution solve for larger numbers in a way that isn't too slow.*/

var primeArray= [];
var theNumber = 600851475143; 

for (var i = 0; i <= theNumber; i++){
	if (theNumber % i === 0) {

		var prime = true;
		for (var j = 2; j < i; j++) {
			if (i % j === 0) {
				prime = false;
				console.log(i + " ain't a prime factor, yo.");
				break;
			};
		};

		if (prime) {
			primeArray.push(i);
			console.log(i + " is definitely a prime factor, yo.")
			if (i > 1000) {
				console.log(i + " is over 1000, so we want to stop");
				break;
			};
		};
	};
};

console.log(primeArray);
console.log(primeArray[primeArray.length - 2] + " is the highest prime factor less than 1000 for " + theNumber);