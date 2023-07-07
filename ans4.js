class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function constructBinaryTree(s) {
    // Remove surrounding parentheses
    s = s.slice(1, s.length - 1);
  
    // Check for empty string
    if (s.length === 0) {
      return null;
    }
  
    // Find the index of the first occurrence of "(" or ")"
    let index = s.indexOf("(");
  
    // If no "(" is found, the string represents a single node
    if (index === -1) {
      return new TreeNode(parseInt(s));
    }
  
    // Find the value of the current node
    const value = parseInt(s.slice(0, index));
  
    // Count the number of parentheses to determine the substring for the left and right subtrees
    let count = 0;
    let i = index;
    while (i < s.length) {
      if (s[i] === "(") {
        count++;
      } else if (s[i] === ")") {
        count--;
      }
  
      if (count === 0) {
        break;
      }
  
      i++;
    }
  
    // Construct the left subtree
    const leftSubtree = constructBinaryTree(s.slice(index, i + 1));
  
    // Construct the right subtree
    const rightSubtree = constructBinaryTree(s.slice(i + 1));
  
    // Create the current node with its left and right subtrees
    return new TreeNode(value, leftSubtree, rightSubtree);
  }
  
  // Example usage
  const s = "4(2(3)(1))(6(5))";
  const root = constructBinaryTree(s);
  console.log(root);
  