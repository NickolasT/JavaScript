"use strict"

let numberOfRow2 = 2;
let sumOfRow2 = 2;
while ( numberOfRow2 <= 10 ) {
  function factorial ( numberOfRow2 ) {
    return numberOfRow2 ? numberOfRow2 * factorial ( numberOfRow2 - 1 ) : 1;
  }
  sumOfRow2 = sumOfRow2 + ( 1 / factorial ( numberOfRow2 ) );
  numberOfRow2++
}
  console.log ( sumOfRow2 );
  
  if ( sumOfRow2 > Math.E ) {
    console.log( "Sum of the row > e");
  } else if ( sumOfRow2 < Math.E ) {
    console.log( "Sum of the row < e");
  } else if ( sumOfRow2 = Math.E ) {
    console.log( "Sum of the row = e")
  }
  