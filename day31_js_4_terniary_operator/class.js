let no = 496440; 
let result = 0;  

while (no != 0) {
    let lastDigit = no % 10;
    result = result + lastDigit; 
    no = Math.floor(no / 10);

}

console.log(`${result}`); 
