function wordPattern(pattern, s) {
    const words = s.split(" ");
    if (pattern.length !== words.length) return false;
    
    const patternMap = new Map();
    const wordMap = new Map();
    
    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];
        
        if (!patternMap.has(char)) {
            patternMap.set(char, word);
        } else {
            if (patternMap.get(char) !== word) {
                return false;
            }
        }
        
        if (!wordMap.has(word)) {
            wordMap.set(word, char);
        } else {
            if (wordMap.get(word) !== char) {
                return false;
            }
        }
    }
    
    return true;
}

// Test cases
console.log(wordPattern("abba", "dog cat cat dog"));  // Output: true
console.log(wordPattern("abba", "dog cat cat fish"));  // Output: false
console.log(wordPattern("aaaa", "dog cat cat dog"));  // Output: false
