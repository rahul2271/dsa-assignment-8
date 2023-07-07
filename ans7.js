function decodeString(s) {
    const stack = [];
    let repetitionCount = 0;
    let currentDecodedString = '';
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
  
      if (/[0-9]/.test(char)) {
        repetitionCount = repetitionCount * 10 + parseInt(char);
      } else if (char === '[') {
        stack.push({ repetitionCount, decodedString: currentDecodedString });
        repetitionCount = 0;
        currentDecodedString = '';
      } else if (char === ']') {
        const { repetitionCount: prevRepetitionCount, decodedString: prevDecodedString } = stack.pop();
        currentDecodedString = prevDecodedString + currentDecodedString.repeat(prevRepetitionCount);
      } else {
        currentDecodedString += char;
      }
    }
  
    return currentDecodedString;
  }
  
  // Example usage
  const encodedString = '3[a2[c]]';
  const decodedString = decodeString(encodedString);
  console.log(decodedString); // Output: 'accaccacc'
  