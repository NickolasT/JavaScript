"use strict"

let multiplicationTable = [];          
for ( let i = 1; i <= 10; i++ )
{
  multiplicationTable [ i ]  = [];
    for ( let j = 1; j <= 10; j++ ) {
      multiplicationTable [ i ] [ j ]  = i * j;
    }
 /*  if (multiplicationTable [ i ] [ j ] < 10 ) {
    multiplicationTable [ i ] [ j ] = "0" + multiplicationTable [ i ] [ j ];
      console.log(multiplicationTable [ i ] );
    } else                                                           не працює          */                                     
    console.log(multiplicationTable [ i ] );
}
