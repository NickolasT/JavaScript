"use strict"

let a = 0, b = 0;
let heightOfTree = prompt ( "... and our tree has height:" );

while ( a < heightOfTree ) {
  let space = "";
  let branch = "";
  for ( b = 0; b < heightOfTree - a; b++ ) {
    space += " ";
  }
  for ( b = 0; b < 2 * a + 1; b++ ) {
    branch += "^";
  } 
  console.log ( space + branch );
  a++;
}