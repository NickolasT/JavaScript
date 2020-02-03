"use strict"

let naturalNumber = prompt ( 'Please enter a natural number' ) ;
let dividerOfnaturalNumber;
	if ( naturalNumber == 0) {
		console.log ( "0" );
	} 
	for ( let dividerOfnaturalNumber = 1; dividerOfnaturalNumber <= naturalNumber; dividerOfnaturalNumber++ ) {
			( naturalNumber % dividerOfnaturalNumber == 0 ) 
			console.log ( dividerOfnaturalNumber );
		} 