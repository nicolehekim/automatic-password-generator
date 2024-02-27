// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = "";
  var passwordText = document.querySelector("#password");
  
  //prompts/questions to ask user:
  var length = prompt('How many characters would you like for your password?');
  var uppperQ = confirm('Would you like to include upper case letters?');
  var lowerQ = confirm('Would you like to include lower case letters?');
  var numbersQ = confirm('Would you like to include numeric characters?');
  var specialQ = confirm('Would you like to include special characters?');

  //sectioned individual characters for the prompts above
  var charsUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var charsLower = 'abcdefghijklmnopqrstuvwxyz';
  var charsNum = '0123456789';
  var charSpec = '!@#$%^&*()';
  var chars = '';


  if (length < 8) {
    alert('Password must have 8 or more characters.');
    return writePassword();
  }

  if (length > 128) {
    alert('Password must be less than 128 characters.');
  }

  if (length === 0) {
    alert('Password must contain at least one field of characters.');
  }

  //combining prompts and character sets
  chars += uppperQ ? charsUpper : '';
  chars += lowerQ ? charsLower : '';
  chars += numbersQ ? charsNum : '';
  chars += specialQ ? charSpec : '';
  console.log(chars);

    // splitting array so I don't have to split up the characters individually
  chars = chars.split('');
  console.log(chars, length);


    //loop for randomly combining the charsets i have and randomnumber
  for (var i=0; i < length; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    console.log(randomNumber);
    
    password = password + chars[randomNumber];
    console.log(password);
  }

  passwordText.value = password;
  return password;

}

console.log("password");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);