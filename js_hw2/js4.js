"use strict"

let pointAofDiapason = 37;
let pointBofDiapason = 63;
let sumOfOddNumbers = 0;

for ( let floatingPointOfDiapason = pointAofDiapason; floatingPointOfDiapason <= pointBofDiapason; floatingPointOfDiapason++ ) {
	if (floatingPointOfDiapason % 2 == 1) {
		sumOfOddNumbers += floatingPointOfDiapason;
	}
}
console.log ( sumOfOddNumbers ) ;