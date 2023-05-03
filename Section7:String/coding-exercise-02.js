// String exercise
// Check if a string contains an email address with '@gmail.com' or not
// indexOf
// lastIndexOf
// includes

function hasEmail(str) {
  // return str.indexOf('@gmail.com') >= 0;
  // return str.lastIndexOf('@gmail.com') >= 0;
  return str.includes('@gmail.com');
}

console.log(hasEmail('huyhoangnguyen32@gmail.com'));
console.log(hasEmail('huyhoangnguyen32@gmail'));
