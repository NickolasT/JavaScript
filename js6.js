"use script"

let x=5;
let y=7;
let z=12;
if ((x+y<=z)||
    (x+z<=y)||
    (y+z<=x)){
    console.log("No, these sides cannot form a triangle")
} else {
    console.log("Yes, these sides form a triangle")
}