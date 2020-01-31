"use strict"

let radiusOfSphere = 8;
let VolumeOfSphere = 4 / 3 * Math.PI * Math.cbrt ( radiusOfSphere ) ;
VolumeOfSphere = VolumeOfSphere.toFixed(4); //Rounding to the  ten thousandth

console.log("Volume of the sphere is: " + VolumeOfSphere + " cubic units")