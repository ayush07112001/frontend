function isPalindrome(num) {
    const str = num.toString();

    
    let start = 0;
    let end = str.length - 1;

    
    while (start < end) {
    
        if (str[start] !== str[end]) {
            return false;
        }
        
        start++;
        end--;
    }

   
    return true;
}


const number = 123;
console.log(isPalindrome(number)); 
