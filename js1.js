"use strict"

let sideOfTriangleA = 5;
let sideOfTriangleB = 6;
let sideOfTriangleC = 9;
let perimeterOfTriangle=sideOfTriangleA+sideOfTriangleB+sideOfTriangleC;
let halfPerimeterOfTriangle=perimeterOfTriangle / 2; 
let squareOfTriangle = ( halfPerimeterOfTriangle * ( halfPerimeterOfTriangle - sideOfTriangleA ) * ( halfPerimeterOfTriangle - sideOfTriangleB ) * ( halfPerimeterOfTriangle - sideOfTriangleC ) ) ** ( 1 / 2 ); //Search Square of triangle by the Herons formula
squareOfTriangle=squareOfTriangle.toFixed(2); //Rounding to the hundredth

console.log("Perimeter of triangle: "+ perimeterOfTriangle)
console.log("Square of triandle: " + squareOfTriangle)
