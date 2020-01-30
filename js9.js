"use strict"

let money = prompt ( 'Please enter the deposits money in $' );
let percent = prompt ( 'Please enter the percent (%) per annum (for example: 13)' );
let timeInYears = prompt ( 'Please enter the deposit time in years' );

let amount = money * ( 1 + percent / 100 ) ** timeInYears; //compound percent formula
amount=amount.toFixed(2);//Rounding to the hundredth
  console.log ("If you put in bank " + money + "$ at " + percent + " % for " + timeInYears + " years, then your amount will be: " + amount + "$");