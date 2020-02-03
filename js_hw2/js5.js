"use strict"

let numberForPrime = prompt ( 'Please enter a number' );
if ( numberForPrime == 0 ) { 
	console.log (0);
} else if ( numberForPrime == 1 ) { 
	console.log (1);
}
nextPrime:
for ( let numbersLessOfThis = 2; numbersLessOfThis < numberForPrime; numbersLessOfThis++ ) {
  for ( let numbersLessOfThis2 = 2; numbersLessOfThis2 < numbersLessOfThis; numbersLessOfThis2++ ) { 
		if ( numbersLessOfThis % numbersLessOfThis2 == 0 ) 
		continue nextPrime; 
  } 
  console.log ( numbersLessOfThis )
}