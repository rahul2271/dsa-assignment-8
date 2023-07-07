function findAnagrams(s, p) {
    const result = [];
    const pMap = new Map(); // Frequency map for string p
    let pLength = p.length;
  
    // Create the frequency map for string p
    for (let i = 0; i < p.length; i++) {
      const char = p[i];
      pMap.set(char, (pMap.get(char) || 0) + 1);
    }
  
    let left = 0;
    let right = 0;
  
    // Process the sliding window
    while (right < s.length) {
      const char = s[right];
  
      // Decrement the frequency of the character in the frequency map
      if (pMap.has(char)) {
        pMap.set(char, pMap.get(char) - 1);
        if (pMap.get(char) >= 0) {
          pLength--;
        }
      }
  
      // Move the sliding window
      if (right - left + 1 === p.length) {
        // If the window size matches the length of string p, check if it's an anagram
        if (pLength === 0) {
          result.push(left);
        }
  
        const leftChar = s[left];
  
        // Increment the frequency of the character at the left pointer in the frequency map
        if (pMap.has(leftChar)) {
          pMap.set(leftChar, pMap.get(leftChar) + 1);
          if (pMap.get(leftChar) > 0) {
            pLength++;
          }
        }
  
        // Move the left pointer to slide the window
        left++;
      }
  
      // Move the right pointer to slide the window
      right++;
    }
  
    return result;
  }
  
  // Example usage
  const s = "cbaebabacd";
  const p = "abc";
  const indices = findAnagrams(s, p);
  console.log(indices); // Output: [0, 6]
  