"use strict"

let coefficientA = 1;
let coefficientB = 6;
let coefficientC = 4; 
let discriminant = coefficientB ** 2 - 4 * coefficientA * coefficientC;

if ( discriminant > 0 ) {  
  let x1 = ( - coefficientB + Math.sqrt(discriminant ) ) / ( 2 * coefficientA );
  let x2 = ( - coefficientB - Math.sqrt(discriminant ) ) / ( 2 * coefficientA );
  x1 = x1.toFixed(3); //Rounding to the thousandth
  x2 = x2.toFixed(3); //Rounding to the thousandth
  console.log("x1=" + x1 + ", x2=" + x2 + ", discriminant D = "  + discriminant);
} else if ( discriminant === 0 ) { 
  let x1 = - coefficientB / ( 2 * coefficientA );
  x1 = x1.toFixed(3); //Rounding to the thousandth
  console.log("x1="  + x1 + ", discriminant D = 0");
} else if ( discriminant < 0 ) {
  console.log("Solutions have a complex value");
} 