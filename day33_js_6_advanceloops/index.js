// surface area of cylinder
// A=2*pi*r*r + 2*pi*r*h

const sArea=(r,h)=> (2 * Math.PI * r * r) + (2 * Math.PI * r * h);
const r=parseFloat(prompt("enter the radius of cylinder"));
const h=parseFloat(prompt("enter the height of the cylinder"))
const result=sArea(r,h);
alert(`the surface area of cylinder with radius ${r} and height ${h} = ${result}`);