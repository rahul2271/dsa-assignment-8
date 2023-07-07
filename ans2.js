function isValidString(s) {
    let openCount = 0;
    let asteriskCount = 0;
  
    // Check from left to right
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
  
      if (char === '(') {
        openCount++;
      } else if (char === '*') {
        asteriskCount++;
      } else {
        // char === ')'
        if (openCount > 0) {
          openCount--;
        } else if (asteriskCount > 0) {
          asteriskCount--;
        } else {
          return false;
        }
      }
    }
  
    // Check from right to left
    let closeCount = 0;
    asteriskCount = 0;
  
    for (let i = s.length - 1; i >= 0; i--) {
      const char = s[i];
  
      if (char === ')') {
        closeCount++;
      } else if (char === '*') {
        asteriskCount++;
      } else {
        // char === '('
        if (closeCount > 0) {
          closeCount--;
        } else if (asteriskCount > 0) {
          asteriskCount--;
        } else {
          return false;
        }
      }
    }
  
    return true;
  }
  
  // Example usage
  const s = "(*))";
  const isValid = isValidString(s);
  console.log(isValid); // Output: true
  