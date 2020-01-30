"use strict"

let coordinate1OfPointA = 2; 
let coordinate2OfPointA = 1;
let coordinate1OfPointB = 8;
let coordinate2OfPointB = 4;
let coordinate1OfPointP = 6;
let coordinate2OfPointP = 3;
 
if ((coordinate1OfPointB-coordinate1OfPointA)*(coordinate2OfPointP-coordinate2OfPointA)-
(coordinate2OfPointB-coordinate2OfPointA)*(coordinate1OfPointP-coordinate1OfPointA)==0) { // We equate the vector product of two vectors to zero
  console.log ("true, Point P lies on a straight line AB" )
} else 
  console.log ( "fasle, Point P don`t lie on a straight line AB" )

    