
  function isValidIdentifier(identifier) {
  if (identifier === "" || !isNaN(identifier[0])) {
    console.log(identifier + " is not a valid identifier.");
    return;
  }
  else{
    flag =true;
  for (var i = 0; i < identifier.length; i++) {
    var char = identifier[i];

    // Check if the character is a letter, digit, underscore, or dollar sign
    if (
      !(
        (char >= "a" && char <= "z") ||
        (char >= "A" && char <= "Z") ||
        char === "_" ||
        char === "$" ||
        (!isNaN(char) && i > 0) // Allow digits after the first character
      )
    ) {
        flag =false;
    //   console.log(identifier + " is not a valid identifier.");
    }
  }
if(flag){
  console.log(identifier + " is a valid identifier.");
}
else{
    
      console.log(identifier + " is not a valid identifier.");
    
}
  }
}

// Example usage
isValidIdentifier("myVariable"); // Logs: myVariable is a valid identifier.
isValidIdentifier("123abc"); // Logs: 123abc is not a valid identifier.
isValidIdentifier("_pr&ivate"); // Logs: _pr&ivate is not a valid identifier.
