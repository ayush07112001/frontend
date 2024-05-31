function longestPalindrome(s) {
    const charCount = new Map();
    
    // Count the frequency of each character
    for (const char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    let length = 0;
    let hasOddFrequency = false;
    
    // Calculate the length of the longest palindrome
    for (const count of charCount.values()) {
        length += Math.floor(count / 2) * 2; // Add even counts
        if (count % 2 !== 0) {
            hasOddFrequency = true;
        }
    }
    
    // Add 1 if there's any character with an odd frequency
    if (hasOddFrequency) {
        length++;
    }
    
    return length;
}

// Test cases
console.log(longestPalindrome("abccccdd")); // Output: 7
console.log(longestPalindrome("a")); // Output: 1
