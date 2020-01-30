"use script"

let A1=2; 
let A2=1;// Enter the coordinates of point A (A1,A2)
let B1=8;
let B2=4;// Enter the coordinates of point B (B1,B2)
let P1=6;
let P2=3;// Enter the coordinates of point P (P1,P2)

if ((B1-A1)*(P2-A2)-(B2-A2)*(P1-A1)==0) { // We equate the vector product of two vectors to zero
    console.log ("true, Point P lies on a straight line AB")
} else 
    console.log("fasle, Point P don`t lie on a straight line AB")