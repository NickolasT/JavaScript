"use script"

let M = prompt('Please enter the deposits money in $');
let I = prompt('Please enter the percent per annum');
let T = prompt('Please enter the deposit time in years');

let s=M*(1+I*T/100);
    console.log ("The amount of money will be:" +s+"$");