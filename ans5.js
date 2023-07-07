function compress(chars) {
    let anchor = 0; // Pointer to track the start of a group
    let writeIndex = 0; // Pointer to track the current writing position
  
    for (let readIndex = 0; readIndex < chars.length; readIndex++) {
      // Check if the current group ends or if we have reached the end of the array
      if (readIndex + 1 === chars.length || chars[readIndex] !== chars[readIndex + 1]) {
        // Write the character
        chars[writeIndex] = chars[anchor];
        writeIndex++;
  
        // Calculate the length of the group
        const groupLength = readIndex - anchor + 1;
  
        // If the group has length greater than 1, write the length
        if (groupLength > 1) {
          const lengthString = groupLength.toString();
  
          // Split the length into individual characters and write them
          for (let i = 0; i < lengthString.length; i++) {
            chars[writeIndex] = lengthString[i];
            writeIndex++;
          }
        }
  
        // Move the anchor to the next group
        anchor = readIndex + 1;
      }
    }
  
    // Return the new length of the array
    return writeIndex;
  }
  
  // Example usage
  const chars = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
  const newLength = compress(chars);
  console.log(chars.slice(0, newLength)); // Output: ['a', '2', 'b', '2', 'c', '3']
  