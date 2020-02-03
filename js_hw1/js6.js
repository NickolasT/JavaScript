"use strict"

let sideOfTriangleX = 5;
let sideOfTriangleY = 7;
let sideOfTriangleZ = 12;
if ( ( sideOfTriangleX + sideOfTriangleY <= sideOfTriangleZ ) ||
     ( sideOfTriangleX + sideOfTriangleZ <= sideOfTriangleY ) ||
     ( sideOfTriangleY + sideOfTriangleZ <= sideOfTriangleX ) ) {
  console.log ( "No, these sides cannot form a triangle" )
} else {
  console.log ( "Yes, these sides form a triangle" )
}