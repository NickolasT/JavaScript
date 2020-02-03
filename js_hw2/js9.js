"use strict"

let sumOfRow3 = 0;
let valueOfRow3;
let numberOfRow3=2;

while ( true ) { 
  valueOfRow3 = ( (-1) ** ( numberOfRow3 - 1 ) / numberOfRow3 );
  if (Math.abs ( valueOfRow3 ) < 0.001 ) { 
		break 
	}
  sumOfRow3 += valueOfRow3;
  numberOfRow3 += 1;
} 
numberOfRow3 = numberOfRow3.toFixed ( 3 );
console.log ( sumOfRow3 );