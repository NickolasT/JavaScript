"use strict"

let numberOfFactorial = prompt ( 'Please enter a natural number' ) ;
	if (numberOfFactorial == 0) {
		console.log ("0! = 1")	
	} else if (numberOfFactorial !== 0) {
		function factorial ( numberOfFactorial ) {
			return ( numberOfFactorial != 1 ) ? numberOfFactorial * factorial(numberOfFactorial - 1 ) : 1;
		}
		console.log ( numberOfFactorial + "! = " + factorial ( numberOfFactorial ) );
	} 
