"use script"

let t=1;
let u=6;
let v=4;
let D=u*u-4*t*v;

if (D>0){
    let x1=(-u+Math.sqrt(D))/(2*t);
    let x2=(-u-Math.sqrt(D))/(2*t);
    x1=x1.toFixed(3);
    x2=x2.toFixed(3);
    console.log("x1=" +x1 +", x2="+x2 +", discriminant D="+D);
} else if (D==0){
    let x1=-u/(2*t);
    x1=x1.toFixed(3);
    console.log("x1=" +x1+", discriminant D=0");
} else if (D<0){
    console.log("Solutions have a complex value");
}