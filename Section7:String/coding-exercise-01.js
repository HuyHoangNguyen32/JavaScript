// Write a function to transform a string
// The first letter in Upper Case
// The rest in Lower Case
// Eg : capitalize('easy FRontEnd') --> 'Easy frontend'

function capitalize(str) {

  if (str === '') return '';

  const firstLetter = str[0].toUpperCase();
  const rest = str.slice(1).toLowerCase();

  const result = `${firstLetter}${rest}`;

  return result;
}

console.log(capitalize('easy FrontEnd'))