// Random Password Generator

function generatePassword(
    length,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols
  ) {
    const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChar = "0123456789";
    const symbolChar = "!@#$%^&*()_+";
  
    let allowedChars = "";
    let password = "";
  
    // Build the allowed character set
    allowedChars += includeLowercase ? lowercaseChar : "";
    allowedChars += includeUppercase ? uppercaseChar : "";
    allowedChars += includeNumbers ? numberChar : "";
    allowedChars += includeSymbols ? symbolChar : "";
  
    if (!allowedChars) {
      return "Please enable at least one character type.";
    }
  
    // Generate the password
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      password += allowedChars[randomIndex];
    }
  
    return password;
  }
  
  // Input Parameters
  const passwordLength = 12;
  const includeLowercase = true;
  const includeUppercase = true;
  const includeNumbers = true;
  const includeSymbols = true;
  
  // Generate the Password
  const generatedPassword = generatePassword(
    passwordLength,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
  
  console.log(`Generated password: ${generatedPassword}`);
  