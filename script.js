// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  
  // Function to prompt user for password options
  function getPasswordOptions() {
    //prompt for password length
      var passwordLength = parseInt(prompt("Enter a password atleast 8 characters not more than 128 characters"));
      //check password length
      if(passwordLength < 8 || passwordLength > 128){
        alert("Please enter the password between 8 and 128 characters");
        return getPasswordOptions();
      }
  
      //confirm character sets
      var includeSpecial = confirm("Include special characters?");
      var includeNumeric = confirm("Include numeric characters?");
      var includeLowerCase = confirm("Include lowercase characters?");
      var includeUpperCase = confirm("Include uppercase characters?");


      //Atleast One character set is selected
if(!includeSpecial && !includeNumeric && !includeLowerCase && !includeUpperCase){
    alert("Please at least one character set must be selected");
    return;
  }
  
  //create options
  var passwordOptions = {
    length : passwordLength,
    special : includeSpecial,
    numeric: includeNumeric,
    lowercase : includeLowerCase,
    uppercase : includeUpperCase
  };
  return passwordOptions;
  }

  // Function for getting a random element from an array
function getRandom(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
 }

// Function to generate password with user input
function generatePassword() {
    var options = getPasswordOptions();
    var charOptions = [];
    if(options.special){
      charOptions = charOptions.concat(specialCharacters);
    }else if(options.numeric){
      charOptions = charOptions.concat(numericCharacters);
    }else if(options.lowercase){
      charOptions = charOptions.concat(lowerCasedCharacters);
    }else if(options.uppercase){
      charOptions = charOptions.concat(upperCasedCharacters);
    }

// Ensure at least one character from each selected set
var password = '';
if (options.special) {
  password += getRandom(specialCharacters);
}
if (options.numeric) {
  password += getRandom(numericCharacters);
}
if (options.lowercase) {
  password += getRandom(lowerCasedCharacters);
}
if (options.uppercase) {
  password += getRandom(upperCasedCharacters);
}

// Generate remaining characters randomly
for (var i = password.length; i < options.length; i++) {
    password += getRandom(charOptions);
  }
  
  return password;
  }

 // Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

    