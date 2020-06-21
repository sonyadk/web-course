{
const fDeg = 32; 
const roubles = 25000; 
const a = 8; 
const b = 45; 
const c = -18; 

let cDeg = (fDeg - 32) * (5/9); 
let dollars = roubles * 75.4550 ; 
let x1 = (-b + Math.sqrt(Math.pow(b,2) - 4*a*c))/(2*a); 
let x2 = (-b - Math.sqrt(Math.pow(b,2) - 4*a*c))/(2*a); 

console.log(cDeg); 
console.log(dollars); 
console.log(x1); 
console.log(x2);
}