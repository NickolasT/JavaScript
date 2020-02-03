"use strict"

let distance = 10;
let totalDistance = distance;
	for ( let day = 1; day < 7; day++ ) {
		distance =  1.1 * distance;
		totalDistance = totalDistance + distance;
	}

totalDistance=totalDistance.toFixed ( 2 ); 
console.log (totalDistance + " km")