function buddyStrings(s, goal) {
    if (s.length !== goal.length) {
      return false;
    }
  
    if (s === goal) {
      // Check for duplicate characters in s
      const seen = new Set();
      for (let i = 0; i < s.length; i++) {
        if (seen.has(s[i])) {
          return true;
        }
        seen.add(s[i]);
      }
      return false;
    }
  
    const indices = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== goal[i]) {
        indices.push(i);
      }
      if (indices.length > 2) {
        return false;
      }
    }
  
    return (
      indices.length === 2 &&
      s[indices[0]] === goal[indices[1]] &&
      s[indices[1]] === goal[indices[0]]
    );
  }
  
  // Example usage
  const s = 'abcd';
  const goal = 'cbad';
  const result = buddyStrings(s, goal);
  console.log(result); // Output: true
  