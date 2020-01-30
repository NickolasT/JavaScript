"use script"

let a=5;
let b=6;
let c=9;
let P=a+b+c; //Search perimeter of triangle
let p=P/2; //Search half-perimeter of triangle
let S=(p*(p-a)*(p-b)*(p-c))**(1/2); //Search Square of triangle by the Herons formula
S=S.toFixed(2); //Rounding to the hundredth

console.log("Perimeter of triangle: "+P)
console.log("Square of triandle: " +S)
