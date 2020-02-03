"use strict"

let sumOfRow1 = 0;
let maxNumberOfRow1 = 100;
for (let numberOfRow1 = 1; numberOfRow1 <= maxNumberOfRow1; numberOfRow1++) {
  sumOfRow1 = sumOfRow1 + 1 / numberOfRow1;
}
sumOfRow1 = sumOfRow1.toFixed (2);

console.log ( sumOfRow1 );
