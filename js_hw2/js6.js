"use strict"

let number = prompt ( 'Please enter a number' ) ;
let divider;
	if ( number == 0) {
		console.log ( "0" );
	} else if ( number > 0 ) { 
		for ( let divider = 1; divider <= number; divider++ ) {
			( number % divider == 0 );
			console.log ( divider + ",");
			console.log ( -divider + ",");
		} 
	} else if ( number < 0 ) {
		for ( let divider = -1; divider >= number; divider-- ) {
			( number % divider == 0 );
			console.log ( divider + ",");
			console.log ( Math.abs ( divider + ","));
		} 
	}
	