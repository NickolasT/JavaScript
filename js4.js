"use strict"

function getBaseLog (exponentOfLogarithm, baseOfLogarithm) { 
  exponentOfLogarithm = 25;
  baseOfLogarithm = 1000;
  return Math.log ( baseOfLogarithm ) / Math.log ( exponentOfLogarithm ); // Return the value
}

console.log ( "logarithm 1000 at base 25 is " + getBaseLog () )