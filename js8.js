"use script"

let number = prompt('Please enter a number');

if (number < -1) {
    console.log ("-1");
  } else if (number >1) {
    console.log ("1");
   } else if ((number>-1)||(number<1)){
    console.log ("0");
  } else 
    console.log ("Error! You must have entered the number");