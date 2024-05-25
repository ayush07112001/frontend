function lengthOfLastWord(str) {
    
    str = str.trim();

   
    const lastSpaceIndex = str.lastIndexOf(' ');

    return str.length - lastSpaceIndex - 1;
}


const string = "superman sharma";
const length = lengthOfLastWord(string);
console.log("Length of last word:", length); 
